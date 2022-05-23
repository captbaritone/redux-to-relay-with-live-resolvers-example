import graphql from "babel-plugin-relay/macro";
import { readFragment } from "relay-runtime/lib/store/ResolverFragments";
import { selectLiveState } from "../liveState";
import { getVisibleTodos } from "../../selectors";

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
  return selectLiveState((state) => {
    return getVisibleTodos(state).map((todo) => todo.id);
  });
}
