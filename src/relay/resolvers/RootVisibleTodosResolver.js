import { selectLiveState } from "../liveState";
import { getVisibleTodos } from "../../selectors";

/**
 * @RelayResolver
 * @fieldName visible_todos
 * @onType Root
 * @edgeTo [Todo]
 * @live
 *
 * Read all todos from the root of the query.
 */
export default function RootVisibleTodosResolver(key) {
  return selectLiveState((state) => {
    return getVisibleTodos(state).map((todo) => todo.id);
  });
}
