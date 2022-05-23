import React from "react";
import classnames from "classnames";

export default function TodoTextInput({
  text: initialText,
  onSave,
  newTodo,
  placeholder,
  editing,
}) {
  const [text, setText] = React.useState(initialText || "");

  const handleSubmit = (e) => {
    const text = e.target.value.trim();
    if (e.which === 13) {
      onSave(text);
      if (newTodo) {
        setText("");
      }
    }
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleBlur = (e) => {
    if (!newTodo) {
      onSave(e.target.value);
    }
  };

  return (
    <input
      className={classnames({
        edit: editing,
        "new-todo": newTodo,
      })}
      type="text"
      placeholder={placeholder}
      autoFocus={true}
      value={text}
      onBlur={handleBlur}
      onChange={handleChange}
      onKeyDown={handleSubmit}
    />
  );
}
