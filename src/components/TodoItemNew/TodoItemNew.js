import React from "react";
import { connect } from "react-redux";
import { onChangeAdd, onAddTodo } from "../../actions";

const TodoItemNew = ({ label, onChangeAdd, onAddTodo, todos }) => {
  const trimLabel = label.trim();

  let isDisabled = true;
  if (trimLabel) {
    isDisabled = false;
  }

  let onAdd = (e) => {
    e.preventDefault();
    if (!lengthError()) onAddTodo(newTodos);
    else alert("Длина должна быть более 3x символов!")
  }
 
  let lengthError = () => {
    if (label.length <3) return true;    
    else return false;
  }

  const newTodos = [...todos, { label, done: false }];

  return (
    <div>
      <form className="row">
        <div className='col-1 ml-2'>
            <button type="submit" name="submit"className="btn bnt-link"
              onClick={onAdd} disabled={isDisabled} >
              <i className="material-icons md-36">
                add
              </i>
            </button>
        </div>

        <div className='col-10'>
          <input type="text" className="form-control ml-2" 
          onChange={onChangeAdd} value={label}></input>
        </div>
      </form>
    </div>
  );
};


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
