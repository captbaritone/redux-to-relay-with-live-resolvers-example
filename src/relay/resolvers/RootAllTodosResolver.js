import { selectLiveState } from "../liveState";

/**
 * @RelayResolver
 * @fieldName all_todos
 * @onType Root
 * @edgeTo [Todo]
 * @live
 *
 * Read all todos from the root of the query.
 */
export default function RootAllTodosResolver() {
  return selectLiveState((state) => {
    return state.todos.map((todo) => todo.id);
  });
}
