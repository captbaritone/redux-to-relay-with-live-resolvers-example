import { selectLiveDB } from "../../store";
import { DB } from "../../db";

/**
 * @RelayResolver
 * @fieldName all_todos
 * @onType Root
 * @edgeTo [Todo]
 * @live
 *
 * All todos in the system.
 */
export default function RootVisibleTodosResolver() {
  return selectLiveDB(() => {
    return DB.query("SELECT id FROM todos;").map(({ id }) => String(id));
  });
}
