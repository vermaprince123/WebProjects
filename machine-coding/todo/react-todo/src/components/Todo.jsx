import React, { useState } from "react";
import "./style.css";

export const Todo = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const handleClick = (e) => {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo("");
  };
  return (
    <div className="todo-container">
      <h1>Todo App</h1>
      <div className="add-todo-container">
        <input
          className="add-todo-input"
          type="text"
          placeholder="Add your new todo..."
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button onClick={handleClick}>✚</button>
      </div>
      <div className="added-todo-container">
        {todos.map((todo) => {
          return (
            <div className="added-todo-item-container">
              <div key={todo} className="added-todo-item">
                {todo}
              </div>
              <button className="added-todo-delete">⛔</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
