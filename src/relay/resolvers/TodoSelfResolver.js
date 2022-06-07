import { readFragment } from "relay-runtime/lib/store/ResolverFragments";
import graphql from "babel-plugin-relay/macro";
import { selectLiveDB } from "../liveState";
import { DB } from "../../db";

/**
 * @RelayResolver
 * @fieldName self
 * @rootFragment TodoSelfResolver
 * @onType Todo
 * @live
 *
 * The Redux JS representaton of the todo.
 */
export default function TodoSelfResolver(key) {
  const { id } = readFragment(
    graphql`
      fragment TodoSelfResolver on Todo {
        id
      }
    `,
    key
  );
  const numericId = parseInt(id, 10);
  return selectLiveDB(() => {
    const statement = DB.prepare(
      "SELECT id, text, completed FROM todos where id = :id;"
    );
    const result = statement.getAsObject({ ":id": numericId });
    return {
      id: String(result.id),
      completed: Boolean(result.completed),
      text: result.text,
    };
  });
}
