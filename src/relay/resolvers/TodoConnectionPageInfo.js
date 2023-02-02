// TODO: All of this will need to be added in order to have proper connection support.

/**
 * @RelayResolver TodoConnectionPageInfo
 * @weak
 */
// What is this type?

/*** @RelayResolver TodoConnectionPageInfo.startCursor: String */
export function startCursor(pageInfo) {
  return "START_CURSOR";
}

/*** @RelayResolver TodoConnectionPageInfo.endCursor: String */
export function endCursor(pageInfo) {
  return "END_CURSOR";
}

/*** @RelayResolver TodoConnectionPageInfo.hasNextPage: Boolean */
export function hasNextPage(pageInfo) {
  return true;
}

/*** @RelayResolver TodoConnectionPageInfo.hasPreviousPage: Boolean */
export function hasPreviousPage(pageInfo) {
  return true;
}
