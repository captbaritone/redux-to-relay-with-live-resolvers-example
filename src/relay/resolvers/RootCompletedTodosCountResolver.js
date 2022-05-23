import graphql from "babel-plugin-relay/macro";
import { readFragment } from "relay-runtime/lib/store/ResolverFragments";

/**
 * @RelayResolver
 * @fieldName completed_todos_count
 * @rootFragment RootCompletedTodosCountResolver
 * @onType Root
 *
 * The total number of completed todos.
 */
export default function RootCompletedTodosCountResolver(key) {
  const data = readFragment(
    graphql`
      fragment RootCompletedTodosCountResolver on Root {
        all_todos {
          completed
        }
      }
    `,
    key
  );
  return data.all_todos.reduce(
    (count, todo) => (todo.completed ? count + 1 : count),
    0
  );
}
