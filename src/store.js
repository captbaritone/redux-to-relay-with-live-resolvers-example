import { createStore, applyMiddleware } from "redux";
import reducer from "./reducers";
import { DB } from "./db";

// We keep the event-sourcing model that the app had. However we simply translate each
// action into an SQL query and execute it on the database.
// We then dispatch a TICK event to ensure all queries against the database are rerun.
// Ideally this solution could be built against a reactive database that could efficiently
// reevaluate queries only when their dependencies change.
//
// Something along the lines of https://skdb.io/
const dbMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case "SET_VISIBILITY_FILTER":
      DB.run("UPDATE settings SET value = ? WHERE name = ?", [
        action.filter,
        "visibilityFilter",
      ]);
      break;
    case "COMPLETE_TODO":
      // TODO: Add limit
      DB.run("UPDATE todos SET completed = NOT completed WHERE id = ?;", [
        action.id,
      ]);
      break;
    case "DELETE_TODO":
      // TODO: Add limit
      DB.run("DELETE FROM todos WHERE id = ?;", [action.id]);
      break;
    case "ADD_TODO":
      DB.run("INSERT INTO todos (text, completed) VALUES (?, false);", [
        action.text,
      ]);
      break;
    case "CLEAR_COMPLETED":
      DB.run("DELETE FROM todos WHERE completed = true;");
      break;
    case "COMPLETE_ALL_TODOS":
      // TODO: Ideally we could use graphql values here.
      DB.run("UPDATE todos SET completed = true;");
      break;
    case "EDIT_TODO":
      // TODO: Add limit
      DB.run("UPDATE todos SET text = ? WHERE id = ?;", [
        action.text,
        action.id,
      ]);
      break;
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }

  return next({ type: "TICK" });
};

const store = createStore(reducer, applyMiddleware(dbMiddleware));

// A utility for mapping a Redux selector to a Relay Live Resolver
// LiveState value. A database with true reactivity would let us subscribe to
// queries. Instead we simply reevaluate every query every time any update is
// made to the DB.
//
// Not efficient at all, but it gives the right observable behavior.
export function selectLiveDB(readDb) {
  function read() {
    return readDb();
  }
  function subscribe(cb) {
    let prev = store.getState().tick;
    return store.subscribe(() => {
      const current = store.getState().tick;
      if (current !== prev) {
        prev = current;
        cb();
      }
    });
  }
  return { read, subscribe };
}

export default store;
