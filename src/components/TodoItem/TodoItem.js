import React from "react";

const TodoItem = ({ item, changeTodoStatus }) => {
  const { label, done } = item;

  let classNames = "col-10";
  let icon = "radio_button_unchecked"

  if (done) {
    classNames += " done";
    icon = "check_circle_outline";
  }

  return (
    <span className='row todo-list-item' onClick={() => {
      changeTodoStatus({ ...item, done: !done });
      }}>
      <span className="material-icons col-1" >
        {icon}
      </span>

      <span className={classNames} >
        {label}
      </span>

    </span>

  );
};

export default TodoItem;
