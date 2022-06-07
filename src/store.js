import { createStore, applyMiddleware } from "redux";
import reducer from "./reducers";
import { DB } from "./db";
import { ConsoleReporter } from "relay-compiler";

const dbMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case "SET_VISIBILITY_FILTER":
      DB.exec("UPDATE settings SET value = ? WHERE name = ?", [
        action.filter,
        "visibilityFilter",
      ]);
      break;
    case "COMPLETE_TODO":
      // TODO: Add limit
      DB.exec("UPDATE todos SET completed = NOT completed WHERE id = ?;", [
        action.id,
      ]);
      break;
    case "DELETE_TODO":
      // TODO: Add limit
      DB.exec("DELETE FROM todos WHERE id = ?;", [action.id]);
      break;
    case "ADD_TODO":
      DB.exec("INSERT INTO todos (text, completed) VALUES (?, false);", [
        action.text,
      ]);
      break;
    case "CLEAR_COMPLETED":
      DB.exec("DELETE FROM todos WHERE completed = true;");
      break;
    case "COMPLETE_ALL_TODOS":
      // TODO: Ideally we could use graphql values here.
      DB.exec("UPDATE todos SET completed = true;");
      break;
    case "EDIT_TODO":
      // TODO: Add limit
      DB.exec("UPDATE todos SET text = ? WHERE id = ?;", [
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

export default store;
