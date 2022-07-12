import graphql from "babel-plugin-relay/macro";
import { selectLiveDB } from "../../store";
import { DB } from "../../db";
import { readFragment } from "relay-runtime/lib/store/ResolverFragments";

/**
 * @RelayResolver
 * @fieldName self
 * @onType Todo
 * @rootFragment TodoSelfResolver
 * @live
 *
 * The DB representation of the todo.
 */
export default function TodoSelfResolver(key) {
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
