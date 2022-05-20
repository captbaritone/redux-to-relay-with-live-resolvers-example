import graphql from "babel-plugin-relay/macro";
import { readFragment } from "relay-runtime/lib/store/ResolverFragments";

/**
 * @RelayResolver
 * @fieldName todos_count
 * @rootFragment RootTodosCountResolver
 * @onType Root
 *
 * The total number of todos.
 */
export default function RootTodosCountResolver(key) {
  const data = readFragment(
    graphql`
      fragment RootTodosCountResolver on Root {
        all_todos {
          __typename
        }
      }
    `,
    key
  );
  return data.all_todos.length;
}
