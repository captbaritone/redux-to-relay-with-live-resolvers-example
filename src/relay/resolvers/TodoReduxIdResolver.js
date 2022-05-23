import { readFragment } from "relay-runtime/lib/store/ResolverFragments";
import graphql from "babel-plugin-relay/macro";

/**
 * @RelayResolver
 * @fieldName redux_id
 * @rootFragment TodoReduxIdResolver
 * @onType Todo
 *
 * The ID of the todo that's used in Redux.
 */
export default function TodoReduxIdResolver(key) {
  const { self } = readFragment(
    graphql`
      fragment TodoReduxIdResolver on Todo {
        self
      }
    `,
    key
  );
  return self.id;
}
