import graphql from "babel-plugin-relay/macro";
import { readFragment } from "relay-runtime/lib/store/ResolverFragments";
import {
  SHOW_ALL,
  SHOW_COMPLETED,
  SHOW_ACTIVE,
} from "../../constants/TodoFilters";

/**
 * @RelayResolver
 * @fieldName visible_todos
 * @rootFragment RootVisibleTodosResolver
 * @onType Root
 * @edgeTo [Todo]
 *
 * Read all todos from the root of the query.
 */
export default function RootVisibleTodosResolver(key) {
  const data = readFragment(
    graphql`
      fragment RootVisibleTodosResolver on Root {
        all_todos {
          id
          completed
        }
        visibility_filter
      }
    `,
    key
  );
  return getVisibleTodos(data.visibility_filter, data.all_todos).map((todo) =>
    relayIdToReduxId(todo.id)
  );
}

function relayIdToReduxId(id) {
  // This is to work around the fact that Relay resolvers to client types
  // namespace their IDs. Here we un-prefix them. We need to find a fix for
  // this is Relay itself.
  const regex = /^client:Todo:(.*)$/;
  if (!regex.test(id)) {
    throw new Error("Expected special client id syntax.");
  }
  return id.replace(regex, "$1");
}

const getVisibleTodos = (visibilityFilter, todos) => {
  switch (visibilityFilter) {
    case SHOW_ALL:
      return todos;
    case SHOW_COMPLETED:
      return todos.filter((t) => t.completed);
    case SHOW_ACTIVE:
      return todos.filter((t) => !t.completed);
    default:
      throw new Error("Unknown filter: " + visibilityFilter);
  }
};
