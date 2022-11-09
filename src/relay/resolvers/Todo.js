import graphql from "babel-plugin-relay/macro";
import { readFragment } from "relay-runtime/lib/store/ResolverFragments";
import { selectLiveDB } from "../../store";
import { DB } from "../../db";

/**
 * @RelayResolver
 * @fieldName self
 * @onType Todo
 * @rootFragment TodoSelfResolver
 * @live
 *
 * The DB representation of the todo.
 */
export function self(key) {
  const data = readFragment(
    graphql`
      fragment TodoSelfResolver on Todo {
        id
      }
    `,
    key
  );
  return selectLiveDB(() => {
    const result = DB.first(
      "SELECT id, text, completed FROM todos where id = :id;",
      { ":id": data.id }
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
 * @RelayResolver
 * @fieldName text
 * @onType Todo
 * @rootFragment TodoTextResolver
 *
 * The text of the todo.
 */
export function text(key) {
  const data = readFragment(
    graphql`
      fragment TodoTextResolver on Todo {
        self
      }
    `,
    key
  );
  return data.self.text;
}

/**
 * @RelayResolver
 * @fieldName completed
 * @onType Todo
 * @rootFragment TodoCompletedResolver
 *
 * Is the todo completed?
 */
export function completed(key) {
  const data = readFragment(
    graphql`
      fragment TodoCompletedResolver on Todo {
        self
      }
    `,
    key
  );
  return data.self.completed;
}
