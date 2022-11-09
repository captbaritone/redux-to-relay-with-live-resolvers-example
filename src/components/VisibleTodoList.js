import React from "react";
import TodoItem from "./TodoItem";
import { connect } from "react-redux";
import graphql from "babel-plugin-relay/macro";
import useFragment from "react-relay/lib/relay-hooks/useFragment";
import { bindActionCreators } from "redux";
import * as TodoActions from "../actions";

const TodoList = ({ query: queryKey, actions }) => {
  const { todos } = useFragment(
    graphql`
      fragment VisibleTodoList on Root {
        todos(filter: $todoFilter) {
          edges {
            node {
              id
              ...TodoItem
            }
          }
        }
      }
    `,
    queryKey
  );
  return (
    <ul className="todo-list">
      {todos.edges.map((edge) => {
        return <TodoItem key={edge.node.id} todo={edge.node} {...actions} />;
      })}
    </ul>
  );
};

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(TodoActions, dispatch),
});

export default connect(null, mapDispatchToProps)(TodoList);
