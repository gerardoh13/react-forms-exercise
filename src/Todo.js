import React, { useState } from "react";

function Todo({ id, todo, done, deleteTodo, index, toggleDone, editTask }) {
  const [editing, setEditing] = useState(false);
  const [task, setTask] = useState(todo);

  const handleDelete = () => {
    deleteTodo(id);
  };

  const handleDone = () => {
    toggleDone(id);
  };

  const handleEdit = () => {
    setEditing((prev) => !prev);
  };

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const saveTask = () => {
    editTask(id, task)
    setEditing(false)
  }
  let content = editing ? (
    <input className="editInput" data-testid="editIpt" type="text" value={task} onChange={handleChange} />
  ) : (
    <span className={done ? "done" : ""}>{todo}</span>
  );

  let btnGroup = editing ? (
    <>
      <button className="btn btn-success" onClick={saveTask}>Save</button>
      <button className="btn btn-warning ms-2" onClick={handleEdit}>
        Cancel
      </button>
    </>
  ) : (
    <>
      <button className="btn btn-secondary btn-sm me-2" onClick={handleEdit}>
        ✎
      </button>
      <button className="btn btn-success btn-sm" onClick={handleDone}>
        ✔
      </button>
      <button className="btn btn-danger btn-sm ms-2" onClick={handleDelete}>
        x
      </button>
    </>
  );
  return (
    <>
      <div className="ms-3">
        {`${index + 1}. `}
        {content}
        <span className="ms-2">{btnGroup}</span>
      </div>
      <hr />
    </>
  );
}

export default Todo;
