import { selectLiveDB } from "../../store";
import { DB } from "../../db";

/**
 * @RelayResolver
 * @fieldName todos_count
 * @onType Root
 * @live
 *
 * The count of all todos in the system.
 */
export default function RootVisibleTodosResolver() {
  return selectLiveDB(() => {
    return DB.first("SELECT count(*) as cnt FROM todos;").cnt;
  });
}
