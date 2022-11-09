import { selectLiveDB } from "../../store";
import { DB } from "../../db";

/**
 * @RelayResolver Todo
 * @rootFragment TodoSelfResolver
 * @live
 *
 * The DB representation of the todo.
 */
export function Todo(id) {
  return selectLiveDB(() => {
    const result = DB.first(
      "SELECT id, text, completed FROM todos where id = :id;",
      { ":id": id }
    );
    // This can happen if the todo is deleted and the get reevaluated in the
    // wrong order. This is because we've closed over the id, but we reevaluate
    // queries before reevaluating resolvers.
    // TODO: Find a better way to handle this.
    if (result == null) {
      return null;
    }
    return {
      id: String(result.id),
      completed: Boolean(result.completed),
      text: result.text,
    };
  });
}

/**
 * @RelayResolver Todo.text: String
 *
 * The text of the todo.
 */
export function text(todo) {
  return todo.text;
}

/**
 * @RelayResolver Todo.completed: Boolean
 *
 * Is the todo completed?
 */
export function completed(todo) {
  return todo.completed;
}
