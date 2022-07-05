import React from "react";
import TodoItem from "./TodoItem";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as TodoActions from "../actions";
import { getVisibleTodos } from "../selectors";

const TodoList = ({ filteredTodos, actions }) => {
  return (
    <ul className="todo-list">
      {filteredTodos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} {...actions} />
      ))}
    </ul>
  );
};

const mapStateToProps = (state) => ({
  filteredTodos: getVisibleTodos(state),
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(TodoActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
