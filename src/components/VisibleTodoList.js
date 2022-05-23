import React from "react";
import TodoItem from "./TodoItem";
import { connect } from "react-redux";
import graphql from "babel-plugin-relay/macro";
import useFragment from "react-relay/lib/relay-hooks/useFragment";
import { bindActionCreators } from "redux";
import * as TodoActions from "../actions";

const TodoList = ({ query: queryKey, actions }) => {
  const { filteredTodos } = useFragment(
    graphql`
      fragment VisibleTodoList on Root {
        filteredTodos: visible_todos {
          id
          ...TodoItem
        }
      }
    `,
    queryKey
  );
  return (
    <ul className="todo-list">
      {filteredTodos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} {...actions} />
      ))}
    </ul>
  );
};

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(TodoActions, dispatch),
});

export default connect(null, mapDispatchToProps)(TodoList);
