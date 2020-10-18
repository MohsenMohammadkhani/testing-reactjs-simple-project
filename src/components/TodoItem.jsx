import React from "react";

function TodoItem({ todos }) {
  const todosTag = todos.map((todo, index) => {
    return (
      <li key={index} className="todo">
        <div className="view">
          <input className="toggle" type="checkbox" />
          <label className="todo-title">{todo.title}</label>
          <button className="destroy"></button>
        </div>
        <input className="edit" type="text" />
      </li>
    );
  });
  return <ul className="todo-list">{todosTag}</ul>;
}

export default TodoItem;
