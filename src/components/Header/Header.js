import React from "react";
import { connect } from "react-redux";
import { onDeleteTodos } from "../../actions";

const Header = ({ todos, onDeleteTodos }) => {
 
  const deleteTodos = () => {
    let newTodos=[];
    todos.forEach(elem=>{
      if (!elem.done) newTodos.push(elem);
    })
      onDeleteTodos(newTodos);
  };
  
  return (

    <nav className=" navbar bg-light d-flex align-items-center">
      <p> TODO list </p>
      <button
        type="button" className="btn" onClick={() => {deleteTodos(); }}  >
        <span className="material-icons md-24">
          delete
        </span>
      </button>
    </nav>
  );
};

const mapDispatchToProps = {
  onDeleteTodos
};

const mapStateToProps = ({ todos }) => {
  return {
    todos,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
