import { selectLiveDB } from "../../store";
import { DB } from "../../db";

/**
 * @RelayResolver TodoEdge
 * @weak
 */
// We use the todo row as the edge model

/*** @RelayResolver TodoEdge.node: Todo */
export function node(edge) {
  return String(edge.id);
}

/*** @RelayResolver TodoEdge.cursor: String */
export function cursor(edge) {
  // Dummy value until we support cursors.
  return "CURSOR";
}
