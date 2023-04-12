import { selectLiveDB } from "../../store";
import { DB } from "../../db";

/**
 * @RelayResolver TodoConnection
 * @weak
 */
// We use the connection args as the model object

/**
 * @RelayResolver TodoConnection.edges: [TodoEdge]
 * @live
 */
export function edges(connectionArgs) {
  const condition = getCondition(connectionArgs.filter);
  // TODO: Add pagination
  return selectLiveDB(() => {
    return DB.sql(`SELECT id FROM todos ${condition} LIMIT ?;`, [
      connectionArgs.first,
    ]);
  });
}

/**
 * @RelayResolver TodoConnection.count: Int
 * @live
 */
export function count(connectionArgs) {
  const condition = getCondition(connectionArgs.filter);
  return selectLiveDB(() => {
    // TODO(SKDB): Why is this count returned as `id` and not `cnt`?
    return DB.first(`SELECT count(*) as cnt FROM todos ${condition};`).id;
  });
}

/**
 * @RelayResolver TodoConnection.is_empty: Boolean
 * @live
 */
export function is_empty(connectionArgs) {
  const condition = getCondition(connectionArgs.filter);
  return selectLiveDB(() => {
    return DB.sql(`SELECT id FROM todos ${condition} LIMIT 1;`).length === 0;
  });
}

/**
 * @RelayResolver TodoConnection.pageInfo: TodoConnectionPageInfo
 * @live
 */
export function pageInfo(connectionArgs) {
  return {};
}

// Given a filter, return a condition `WHERE` clause.
function getCondition(filter) {
  switch (filter) {
    case "ALL":
      return "";
    case "COMPLETED":
      return "WHERE completed = true";
    case "ACTIVE":
      return "WHERE completed = false";
    default:
      throw new Error("Unknown filter: " + filter);
  }
}
