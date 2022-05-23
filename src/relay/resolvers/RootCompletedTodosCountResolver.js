import graphql from "babel-plugin-relay/macro";
import { readFragment } from "relay-runtime/lib/store/ResolverFragments";
import { getCompletedTodoCount } from "../../selectors";
import { selectLiveState } from "../liveState";

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
  return selectLiveState(getCompletedTodoCount);
}
