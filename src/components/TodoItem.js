import React from "react";
import classnames from "classnames";
import TodoTextInput from "./TodoTextInput";
import graphql from "babel-plugin-relay/macro";
import useFragment from "react-relay/lib/relay-hooks/useFragment";

export default function TodoItem({
  todo: todoKey,
  completeTodo,
  editTodo,
  deleteTodo,
}) {
  const todo = useFragment(
    graphql`
      fragment TodoItem on Todo {
        redux_id
        completed
        text
      }
    `,
    todoKey
  );

  const [editing, setEditing] = React.useState(false);

  const handleSave = (id, text) => {
    if (text.length === 0) {
      deleteTodo(id);
    } else {
      editTodo(id, text);
    }
    setEditing(false);
  };

  let element;
  if (editing) {
    element = (
      <TodoTextInput
        text={todo.text}
        editing={editing}
        onSave={(text) => handleSave(todo.redux_id, text)}
      />
    );
  } else {
    element = (
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={todo.completed}
          onChange={() => completeTodo(todo.redux_id)}
        />
        <label onDoubleClick={() => setEditing(true)}>{todo.text}</label>
        <button className="destroy" onClick={() => deleteTodo(todo.redux_id)} />
      </div>
    );
  }

  return (
    <li
      className={classnames({
        completed: todo.completed,
        editing,
      })}
    >
      {element}
    </li>
  );
}
