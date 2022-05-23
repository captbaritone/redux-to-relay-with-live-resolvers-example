import { selectLiveState } from "../liveState";

/**
 * @RelayResolver
 * @fieldName visibility_filter
 * @onType Root
 * @live
 *
 * The currently active visibility filter.
 */
export default function RootVisibilityFilterResolver() {
  return selectLiveState((state) => state.visibilityFilter);
}
