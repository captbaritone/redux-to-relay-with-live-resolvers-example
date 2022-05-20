import graphql from "babel-plugin-relay/macro";
import { readFragment } from "relay-runtime/lib/store/ResolverFragments";
import { selectLiveState } from "../liveState";

/**
 * @RelayResolver
 * @fieldName visibility_filter
 * @rootFragment RootVisibilityFilterResolver
 * @onType Root
 * @live
 *
 * The currently active visibility filter.
 */
export default function RootVisibilityFilterResolver(key) {
  // Even though we don't need any data, Relay currently requires that very
  // Relay Resolver have a fragment on the parent type. We can remove this once
  // that restriction is removed.
  const data = readFragment(
    graphql`
      fragment RootVisibilityFilterResolver on Root {
        all_todos {
          __typename
        }
      }
    `,
    key
  );
  return selectLiveState((state) => state.visibilityFilter);
}
