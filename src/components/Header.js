import React from "react";
import TodoTextInput from "./TodoTextInput";
import { connect } from "react-redux";
import { addTodo } from "../actions";

const Header = ({ addTodo }) => (
  <header className="header">
    <h1>todos</h1>
    <TodoTextInput
      newTodo
      onSave={(text) => {
        if (text.length !== 0) {
          addTodo(text);
        }
      }}
      placeholder="What needs to be done?"
    />
  </header>
);

export default connect(null, { addTodo })(Header);
