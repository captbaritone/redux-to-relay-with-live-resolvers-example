import graphql from "babel-plugin-relay/macro";
import { readFragment } from "relay-runtime/lib/store/ResolverFragments";

/**
 * @RelayResolver
 * @fieldName completed
 * @onType Todo
 * @rootFragment TodoCompletedResolver
 *
 * Is the todo completed?
 */
export default function TodoCompletedResolver(key) {
  const data = readFragment(
    graphql`
      fragment TodoCompletedResolver on Todo {
        self
      }
    `,
    key
  );
  return data.self.completed;
}
