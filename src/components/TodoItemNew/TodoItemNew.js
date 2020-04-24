import React from "react";
import { connect } from "react-redux";
import { onChangeAdd, onAddTodo } from "../../actions";

const TodoItemNew = ({ label, onChangeAdd, onAddTodo, todos }) => {
  const trimLabel = label.trim();
  let lengthError = ''

  let onLengthCheck = (e) => {
    e.preventDefault();
    if (label.length <3) alert('Длина должна быть более 3х символов');
    else onAddTodo(newTodos);
  }

  let isDisabled = true;
  if (trimLabel) {
    isDisabled = false;
  }

  const newTodos = [...todos, { label, done: false }];

  return (
    <div className='container'>
      <form className="d-flex row">
      <div className='col-1'>
          <button type="submit" name="submit"className="btn bnt-link"
            onClick={onLengthCheck}
            disabled={isDisabled} >
            <i className="material-icons md-24">
              add
            </i>
          </button>
      </div>

      <div className='col-10'>
        <input type="text" className="form-control ml-2" 
        onChange={onChangeAdd} value={label}></input>
      </div>
      </form>
      <div>
        {lengthError}
        <Error lengthError={lengthError}></Error>
      </div>
    </div>
  );
};

const Error = ({lengthError}) => {
  return(
    <div>
      {lengthError}
    </div>

  )
}

const mapStateToProps = ({ todos, addTodoLabel }) => {
  return {
    todos,
    label: addTodoLabel,
  };
};

const mapDispatchToProps = {
  onChangeAdd,
  onAddTodo,
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoItemNew);
