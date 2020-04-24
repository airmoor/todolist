const initialState = {
  todos: [
    { label: "Покормить собаку", done: false },
    { label: "Построить дом", done: false },
    { label: "Помыть машину", done: false },
    { label: "Купить продукты молоко, соль, сахар, вода, макароны, мясо, моцарелла", done: false },
    { label: "Составить список", done: true },
  ],
  addTodoLabel: ""
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ON_TOGGLE_STATUS":
      return {
        ...state,
        todos: action.payload,
      };

      case "ON_DELETE_TODOS":
      return {
        ...state,
        todos: action.payload,
      };

    case "ON_CHANGE_ADD_TODO_INPUT":
      return {
        ...state,
        addTodoLabel: action.payload,
      };

    case "ON_ADD_TODO":
      return {
        ...state,
        todos: action.payload,
        addTodoLabel: "",
      };

    default:
      return state;
  }
};

export default reducer;
