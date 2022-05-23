import { readFragment } from "relay-runtime/lib/store/ResolverFragments";
import graphql from "babel-plugin-relay/macro";
import { selectLiveState } from "../liveState";

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
  return selectLiveState((state) => {
    return state.todos.find((todo) => todo.id === numericId);
  });
}
