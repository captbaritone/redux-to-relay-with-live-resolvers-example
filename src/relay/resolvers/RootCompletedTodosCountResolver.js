import graphql from "babel-plugin-relay/macro";
import { readFragment } from "relay-runtime/lib/store/ResolverFragments";
import { selectLiveDB } from "../liveState";
import { DB } from "../../db";

/**
 * @RelayResolver
 * @fieldName completed_todos_count
 * @rootFragment RootCompletedTodosCountResolver
 * @onType Root
 * @live
 *
 * The total number of completed todos.
 */
export default function RootCompletedTodosCountResolver(key) {
  // Even though we don't need any data, Relay currently requires that very
  // Relay Resolver have a fragment on the parent type. We can remove this once
  // that restriction is removed.
  readFragment(
    graphql`
      fragment RootCompletedTodosCountResolver on Root {
        dummy_server_field
      }
    `,
    key
  );
  return selectLiveDB(() => {
    return DB.exec("SELECT COUNT(*) FROM todos WHERE completed = true;")[0]
      .values[0][0];
  });
}
