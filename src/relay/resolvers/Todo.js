import { readFragment } from "relay-runtime/lib/store/ResolverFragments";
import graphql from "babel-plugin-relay/macro";
import { selectLiveState } from "../liveState";

/**
 * @RelayResolver Todo
 * @live
 *
 * The Redux JS representation of the todo.
 */
export function Todo(id) {
  const numericId = parseInt(id, 10);
  return selectLiveState((state) => {
    return state.todos.find((todo) => todo.id === numericId);
  });
}

/**
 * @RelayResolver Todo.completed: Boolean
 *
 * Has the todo been completed?
 */
export function completed(todo) {
  return todo.completed;
}

/**
 * @RelayResolver Todo.redux_id: String
 *
 * The ID of the todo that's used in Redux.
 */
export function redux_id(todo) {
  return todo.id;
}

/**
 * @RelayResolver Todo.text: String
 *
 * The text of the todo.
 */
export function text(todo) {
  return todo.text;
}
