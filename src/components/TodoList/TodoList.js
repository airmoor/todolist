import React from "react";
import { connect } from "react-redux";
import TodoItem from "../TodoItem";
import { onToggleStatus } from "../../actions";


const TodoList = ({ todos, onToggleStatus }) => {

  const changeTodoStatus = (newItem) => {
    const idx = todos.findIndex((todo) => todo.label === newItem.label);
    const newTodos = [...todos.slice(0, idx), newItem, ...todos.slice(idx + 1)];
    onToggleStatus(newTodos);
  };


  const elements = todos.map((item, idx) => {
    return (
      <li key={idx} className="list-group-item border-0">
        <TodoItem item={item}
          changeTodoStatus={changeTodoStatus}
        />
      </li>
    );
  });
  return <ul className="list-group my-3">{elements}</ul>;
};

const mapStateToProps = ({ todos }) => {
  return {
    todos
  };
};

const mapDispatchToProps = {
  onToggleStatus
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
