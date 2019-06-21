import React, { useState } from "react";
import "./App.css";

function TodoForm({ addTodo }) {
  const [value, setValue] = useState("");

  const submitHandler = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          value={value}
          type="text"
          placeholder="Enter Todo......"
          className="input"
          onChange={e => setValue(e.target.value)}
        />
      </form>
    </div>
  );
}

function Todo({ todo, index, completeTodo, deleteTodo }) {
  return (
    <div
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
      className="todo"
    >
      {todo.text}
      <div>
        <button onClick={() => completeTodo(index)}>Complete</button>
        <button onClick={() => deleteTodo(index)}>x</button>
      </div>
    </div>
  );
}

function App() {
  const [todos, setTodos] = useState([
    {
      text: "Hi first Todo",
      isCompleted: false
    },
    {
      text: "Hi Second Todo",
      isCompleted: false
    },
    {
      text: "Hi Third Todo",
      isCompleted: false
    }
  ]);

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };
  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };
  const deleteTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };
  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo
            index={index}
            key={index}
            todo={todo}
            completeTodo={completeTodo}
            deleteTodo={deleteTodo}
          />
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}
export default App;
