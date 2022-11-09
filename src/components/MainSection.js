import React, { useState } from "react";
import Footer from "./Footer";
import VisibleTodoList from "./VisibleTodoList";
import { connect } from "react-redux";
import * as TodoActions from "../actions";
import { bindActionCreators } from "redux";
import useFragment from "react-relay/lib/relay-hooks/useFragment";
import graphql from "babel-plugin-relay/macro";

const MainSection = ({
  query: queryKey,
  actions,
  activeFilter,
  setActiveFilter,
}) => {
  const data = useFragment(
    graphql`
      fragment MainSection on Root {
        todos {
          count
        }
        completed_todos: todos(filter: "COMPLETED") {
          count
        }
        ...VisibleTodoList
        ...Footer
      }
    `,
    queryKey
  );
  const completedCount = data.completed_todos.count;
  const todosCount = data.todos.count;
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
      <VisibleTodoList query={data} />
      {!!todosCount && (
        <Footer
          query={data}
          setActiveFilter={setActiveFilter}
          activeFilter={activeFilter}
          onClearCompleted={actions.clearCompleted}
        />
      )}
    </section>
  );
};

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(TodoActions, dispatch),
});

export default connect(null, mapDispatchToProps)(MainSection);
