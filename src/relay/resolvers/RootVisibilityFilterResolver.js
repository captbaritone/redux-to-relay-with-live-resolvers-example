import graphql from "babel-plugin-relay/macro";
import { readFragment } from "relay-runtime/lib/store/ResolverFragments";
import { getVisibilityFilter } from "../../selectors";
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
  readFragment(
    graphql`
      fragment RootVisibilityFilterResolver on Root {
        dummy_server_field
      }
    `,
    key
  );
  return selectLiveState(getVisibilityFilter);
}
