import { readFragment } from "relay-runtime/lib/store/ResolverFragments";
import graphql from "babel-plugin-relay/macro";

/**
 * @RelayResolver
 * @fieldName text
 * @rootFragment TodoTextResolver
 * @onType Todo
 *
 * The text of the todo.
 */
export default function TodoTextResolver(key) {
  const { self } = readFragment(
    graphql`
      fragment TodoTextResolver on Todo {
        self
      }
    `,
    key
  );
  return self.text;
}
