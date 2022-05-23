import { readFragment } from "relay-runtime/lib/store/ResolverFragments";
import graphql from "babel-plugin-relay/macro";

/**
 * @RelayResolver
 * @fieldName completed
 * @rootFragment TodoCompletedResolver
 * @onType Todo
 *
 * Has the todo been completed?
 */
export default function TodoCompletedResolver(key) {
  const { self } = readFragment(
    graphql`
      fragment TodoCompletedResolver on Todo {
        self
      }
    `,
    key
  );
  return self.completed;
}
