import graphql from "babel-plugin-relay/macro";
import { readFragment } from "relay-runtime/lib/store/ResolverFragments";

/**
 * @RelayResolver
 * @fieldName text
 * @onType Todo
 * @rootFragment TodoTextResolver
 *
 * The text of the todo.
 */
export default function TodoTextResolver(key) {
  const data = readFragment(
    graphql`
      fragment TodoTextResolver on Todo {
        self
      }
    `,
    key
  );
  return data.self.text;
}
