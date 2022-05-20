import React from "react";
import TodoItem from "./TodoItem";
import graphql from "babel-plugin-relay/macro";
import useFragment from "react-relay/lib/relay-hooks/useFragment";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as TodoActions from "../actions";

const TodoList = function ({ actions, query: queryKey }) {
  const { visible_todos: todos } = useFragment(
    graphql`
      fragment TodoList on Root {
        visible_todos {
          id
          ...TodoItem
        }
      }
    `,
    queryKey
  );

  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} {...actions} />
      ))}
    </ul>
  );
};

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(TodoActions, dispatch),
});

export default connect(null, mapDispatchToProps)(TodoList);
