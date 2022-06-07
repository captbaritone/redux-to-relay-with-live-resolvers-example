import graphql from "babel-plugin-relay/macro";
import { readFragment } from "relay-runtime/lib/store/ResolverFragments";
import { selectLiveDB } from "../liveState";
import { DB } from "../../db";

/**
 * @RelayResolver
 * @fieldName visible_todos
 * @rootFragment RootVisibleTodosResolver
 * @onType Root
 * @edgeTo [Todo]
 * @live
 *
 * Read all todos from the root of the query.
 */
export default function RootVisibleTodosResolver(key) {
  // Even though we don't need any data, Relay currently requires that very
  // Relay Resolver have a fragment on the parent type. We can remove this once
  // that restriction is removed.
  readFragment(
    graphql`
      fragment RootVisibleTodosResolver on Root {
        dummy_server_field
      }
    `,
    key
  );
  return selectLiveDB(() => {
    // TODO: Apply filter
    const statement = DB.exec("SELECT id FROM todos;")[0];
    if (statement == null) {
      return [];
    }
    const ids = statement.values.map(([id]) => String(id));
    return ids;
  });
}
