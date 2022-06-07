import graphql from "babel-plugin-relay/macro";
import { readFragment } from "relay-runtime/lib/store/ResolverFragments";
import { selectLiveDB } from "../liveState";
import { DB } from "../../db";

/**
 * @RelayResolver
 * @fieldName todos_count
 * @rootFragment RootTodosCountResolver
 * @onType Root
 * @live
 *
 * The total number of todos.
 */
export default function RootTodosCountResolver(key) {
  readFragment(
    graphql`
      fragment RootTodosCountResolver on Root {
        dummy_server_field
      }
    `,
    key
  );
  return selectLiveDB(() => {
    return DB.exec("SELECT COUNT(*) FROM todos;")[0].values[0][0];
  });
}
