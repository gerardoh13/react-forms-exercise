import React, { useState } from "react";
import NewTodoForm from "./NewTodoForm";
import Todo from "./Todo";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const addTodo = (newTodo) => {
    setTodos((prev) => [...prev, newTodo]);
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((t) => t.id !== id));
  };

  const toggleDone = (id) => {
    let todosCopy = [...todos]
    const found = todosCopy.find(t => t.id === id);
    found.done = !found.done
    setTodos(todosCopy)
  }
  
  const editTask = (id, task) => {
    let todosCopy = [...todos]
    const found = todosCopy.find(t => t.id === id);
    found.todo = task
    setTodos(todosCopy)
  }

  const todoList = todos.map((t, idx) => (
    <Todo
      key={t.id}
      id={t.id}
      index={idx}
      todo={t.todo}
      done={t.done}
      deleteTodo={deleteTodo}
      toggleDone={toggleDone}
      editTask={editTask}
    />
  ));
  return (
    <>
      <NewTodoForm addTodo={addTodo} />
      {todos.length === 0 ? null : (
        <div className="notePad mt-3"> {todoList}</div>
      )}
    </>
  );
};

export default TodoList;
