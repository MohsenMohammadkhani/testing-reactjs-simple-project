import React, { useState } from "react";
import TodoItem from "./TodoItem";

function TodoList() {
  const [listTodo, setListTodo] = useState([
    {
      title: "wake up",
    },
    {
      title: "wash my face",
    },
    {
      title: "exercise",
    },
    {
      title: "breakfast",
    },
  ]);

  const addToDo = (event) => {
    if (event.key === "Enter") {
      const textTodo = event.target.value;
      if (textTodo == "") {
        alert("please enter text");
        return;
      }

      setListTodo((prevState) => {
        return [...prevState, { title: textTodo }];
      });
    }
  };

  return (
    <section className="todoapp">
      <header className="header">
        <h1>todos</h1>
        <input
          className="new-todo"
          autofocus
          autocomplete="off"
          placeholder="چه کاری میخواهی انجام بدهی ؟"
          required
          onKeyDown={addToDo}
        />
      </header>
      <section className="main">
        <input className="toggle-all" type="checkbox" />
        <TodoItem todos={listTodo} />
      </section>
      <footer className="footer">
        <span className="todo-count">
          <strong>12</strong> مورد
        </span>
        <ul className="filters">
          <li>
            <a href="#/all">همه</a>
          </li>
          <li>
            <a href="#/active">فعال</a>
          </li>
          <li>
            <a href="#/completed">انجام شده</a>
          </li>
        </ul>
        <button className="clear-completed">ئاک کردن انجام شده ها</button>
      </footer>
    </section>
  );
}

export default TodoList;
