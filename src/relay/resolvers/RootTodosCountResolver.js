import { selectLiveState } from "../liveState";

/**
 * @RelayResolver
 * @fieldName todos_count
 * @onType Root
 * @live
 *
 * The total number of todos.
 */
export default function RootTodosCountResolver() {
  return selectLiveState((state) => state.todos.length);
}
