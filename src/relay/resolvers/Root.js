import { selectLiveState } from "../liveState";
import { getCompletedTodoCount } from "../../selectors";
import { getVisibleTodos, getVisibilityFilter } from "../../selectors";

/**
 * @RelayResolver Root.all_todos: [Todo]
 * @live
 *
 * Read all todos from the root of the query.
 */
export function all_todos() {
  return selectLiveState((state) => {
    return state.todos.map((todo) => todo.id);
  });
}

/**
 * @RelayResolver Root.completed_todos_count: Int
 * @live
 *
 * The total number of completed todos.
 */
export function completed_todos_count() {
  return selectLiveState(getCompletedTodoCount);
}

/**
 * @RelayResolver Root.todos_count: Int
 * @live
 *
 * The total number of todos.
 */
export function todos_count() {
  return selectLiveState((state) => state.todos.length);
}

/**
 * @RelayResolver Root.visibility_filter: RelayResolverValue
 * @live
 *
 * The currently active visibility filter.
 */
export function visibility_filter() {
  return selectLiveState(getVisibilityFilter);
}

/**
 * @RelayResolver Root.visible_todos: [Todo]
 * @live
 *
 * Read all todos from the root of the query.
 */
export function visible_todos() {
  return selectLiveState((state) => {
    return getVisibleTodos(state).map((todo) => String(todo.id));
  });
}
