import { getCompletedTodoCount } from "../../selectors";
import { selectLiveState } from "../liveState";

/**
 * @RelayResolver
 * @fieldName completed_todos_count
 * @onType Root
 * @live
 *
 * The total number of completed todos.
 */
export default function RootCompletedTodosCountResolver() {
  return selectLiveState(getCompletedTodoCount);
}
