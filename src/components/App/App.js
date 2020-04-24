import React from "react";

import Header from "../Header";
import TodoList from "../TodoList";
import TodoItemNew from "../TodoItemNew";

import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

const App = () => {
  return (
    <div className="container app-todo">
      <Header />
      <TodoList />
      <TodoItemNew />
    </div>
  );
};

export default App;
