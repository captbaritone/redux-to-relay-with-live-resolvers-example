import { selectLiveDB } from "../../store";
import { DB } from "../../db";

/**
 * @RelayResolver
 * @fieldName completed_todos_count
 * @onType Root
 * @live
 *
 * The total number of completed todos.
 */
export default function RootCompletedTodosCountResolver(key) {
  return selectLiveDB(() => {
    return DB.first("SELECT count(*) as cnt FROM todos WHERE completed = true;")
      .cnt;
  });
}
