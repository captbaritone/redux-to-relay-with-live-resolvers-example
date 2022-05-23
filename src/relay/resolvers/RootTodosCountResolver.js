import graphql from "babel-plugin-relay/macro";
import { readFragment } from "relay-runtime/lib/store/ResolverFragments";
import { selectLiveState } from "../liveState";

/**
 * @RelayResolver
 * @fieldName todos_count
 * @rootFragment RootTodosCountResolver
 * @onType Root
 * @live
 *
 * The total number of todos.
 */
export default function RootTodosCountResolver(key) {
  readFragment(
    graphql`
      fragment RootTodosCountResolver on Root {
        dummy_server_field
      }
    `,
    key
  );
  return selectLiveState((state) => state.todos.length);
}
