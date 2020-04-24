const onToggleStatus = (newTodos) => {
  return {
    type: "ON_TOGGLE_STATUS",
    payload: newTodos,
  };
};

const onDeleteTodos = (newTodos) => {
  return {
    type: "ON_DELETE_TODOS",
    payload: newTodos,
  };
};

const onAddTodo = (newTodos) => {


  return {
    type: "ON_ADD_TODO",
    payload: newTodos,
  };
};

const onChangeAdd = (evt) => {
  const value = evt.target.value;

  return {
    type: "ON_CHANGE_ADD_TODO_INPUT",
    payload: value,
  };
};


export {
  onToggleStatus,
  onDeleteTodos,
  onAddTodo,
  onChangeAdd,
};
