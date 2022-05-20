import React from "react";
import Footer from "./Footer";
import TodoList from "./TodoList";
import graphql from "babel-plugin-relay/macro";
import useFragment from "react-relay/lib/relay-hooks/useFragment";
import { connect } from "react-redux";
import * as TodoActions from "../actions";
import { bindActionCreators } from "redux";

function MainSection({ query: queryKey, actions }) {
  const data = useFragment(
    graphql`
      fragment MainSection on Root {
        todosCount: todos_count
        completedCount: completed_todos_count
        ...TodoList
        ...Footer
      }
    `,
    queryKey
  );
  const { todosCount, completedCount } = data;
  return (
    <section className="main">
      {!!todosCount && (
        <span>
          <input
            className="toggle-all"
            type="checkbox"
            checked={completedCount === todosCount}
            readOnly
          />
          <label onClick={actions.completeAllTodos} />
        </span>
      )}
      <TodoList query={data} />
      {!!todosCount && (
        <Footer query={data} onClearCompleted={actions.clearCompleted} />
      )}
    </section>
  );
}

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(TodoActions, dispatch),
});

export default connect(null, mapDispatchToProps)(MainSection);
