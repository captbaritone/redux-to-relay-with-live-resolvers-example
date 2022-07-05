import graphql from "babel-plugin-relay/macro";
import { readInlineData } from "relay-runtime";

/**
 * For compatibility with legacy parts of the app which still read state via selectors,
 * we can provide an implementation of each public selector which is defined
 * using a GraphQL fragment.
 *
 * In this world, Relay store is the source of truth for all concrete data
 * (server or client), and Resolvers are the source of truth for all _derived_
 * data. This holds for new code (reading via Relay) and legacy code (reading
 * via selectors).
 *
 * **TODO**: This approach will not work in use cases where data in the query can suspend.
 * Something more robust will be needed to handle that case.
 */
export const getVisibilityFilter = (state) => {
  const data = readInlineData(
    graphql`
      fragment selectorsGetVisibilityFilter on Root @inline {
        visibility_filter
      }
    `,
    state
  );
  return data.visibility_filter;
};

export const getVisibleTodos = (state) => {
  const data = readInlineData(
    graphql`
      fragment selectorsGetVisibleTodos on Root @inline {
        visible_todos {
          id
          text
          completed
        }
      }
    `,
    state
  );
  return data.visible_todos;
};

export const getCompletedTodoCount = (state) => {
  const data = readInlineData(
    graphql`
      fragment selectorsGetCompletedTodoCount on Root @inline {
        completed_todos_count
      }
    `,
    state
  );
  return data.completed_todos_count;
};

export const getTodosCount = (state) => {
  const data = readInlineData(
    graphql`
      fragment selectorsGetTodoCount on Root @inline {
        todos_count
      }
    `,
    state
  );
  return data.todos_count;
};
