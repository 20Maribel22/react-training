import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faTrash, faLock, faLockOpen } from '@fortawesome/free-solid-svg-icons'
import "./ToDoList.css";

function ToDoList({ todos, setTodos }) {
     const [value, setValue] = useState('')

  const deleteTodo = (id) => {
    const newTodo = [...todos].filter((todo) => todo.id !== id);
    setTodos(newTodo);
  };

  const statusTodo = (id) => {
    
    const newTodo = [...todos].filter((todo) => {
      if(todo.id === id) {
        todo.status = !todo.status
      }
      return todo
    } )
    setTodos(newTodo);
  };

  const addTodo = () => {
    setTodos(
        [...todos, {
            id: uuidv4(),
            text: value,
            status: true
        }]
        
    )
    setValue('')
  };

 console.log(todos);
 
  return (
    <div className="todo">
      <div className="todo__header">
        <h2 style={{ margin: 5 }}>My To Do List</h2>
        <input type="text" className="todo__input" placeholder="Title..."  value={value} onChange={(e) => setValue(e.target.value)}/>
        <span className="todo__btn" onClick={addTodo}>Add</span>
      </div>

      <ul className="todo__list">
        {todos.map((todo) => {
          return (
            <div className="todo__container" key={todo.id}>
              <li className={!todo.status ? "checked" : "todo__item"} key={todo.id}>
                {todo.text}
              </li>
              <button
                className="todo__close"
                onClick={() => deleteTodo(todo.id)}
              >
                <FontAwesomeIcon icon={faTrash} />
              </button>
              <button
                className="todo__close todo__close-status"
                onClick={() => statusTodo(todo.id)}
              >
               {todo.status  ?  <FontAwesomeIcon icon={faLock}  /> : <FontAwesomeIcon icon={faLockOpen}  />}
              </button>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default ToDoList;
