import { selectLiveDB } from "../../store";
import { DB } from "../../db";

import graphql from "babel-plugin-relay/macro";
import { readFragment } from "relay-runtime/lib/store/ResolverFragments";
import {
  SHOW_ALL,
  SHOW_COMPLETED,
  SHOW_ACTIVE,
} from "../../constants/TodoFilters";

// NOTE: Another option would be to implement this as a @live resolver with a
// SELECT WHERE query.

/**
 * @RelayResolver
 * @fieldName visible_todos
 * @rootFragment RootVisibleTodosResolver
 * @onType Root
 * @edgeTo [Todo]
 *
 * Read all todos from the root of the query.
 */
export function visible_todos(key) {
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

  return getVisibleTodos(data.visibility_filter, data.all_todos).map(
    (todo) => todo.id
  );
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

/**
 * @RelayResolver
 * @fieldName all_todos
 * @onType Root
 * @edgeTo [Todo]
 * @live
 *
 * All todos in the system.
 */
export function all_todos() {
  return selectLiveDB(() => {
    return DB.query("SELECT id FROM todos;").map(({ id }) => String(id));
  });
}

/**
 * @RelayResolver
 * @fieldName completed_todos_count
 * @onType Root
 * @live
 *
 * The total number of completed todos.
 */
export function completed_todos_count(key) {
  return selectLiveDB(() => {
    return DB.first("SELECT count(*) as cnt FROM todos WHERE completed = true;")
      .cnt;
  });
}

/**
 * @RelayResolver
 * @fieldName todos_count
 * @onType Root
 * @live
 *
 * The count of all todos in the system.
 */
export function todos_count() {
  return selectLiveDB(() => {
    return DB.first("SELECT count(*) as cnt FROM todos;").cnt;
  });
}

/**
 * @RelayResolver
 * @fieldName visibility_filter
 * @onType Root
 * @live
 *
 * The current active visibility filter.
 */
export function visibility_filter() {
  return selectLiveDB(() => {
    return DB.first(
      "SELECT value FROM settings WHERE name = 'visibilityFilter' LIMIT 1;"
    ).value;
  });
}
