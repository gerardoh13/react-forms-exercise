import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const NewTodoForm = ({ addTodo }) => {
  const INITIAL_STATE = {
    todo: "",
  };
  const [formData, setFormData] = useState(INITIAL_STATE);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((data) => ({
      ...data,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo({ ...formData, id: uuidv4(), done: false });
    setFormData(INITIAL_STATE);
  };

  return (
    <form onSubmit={handleSubmit} className=" row todoForm">
      <div className="col-11">
        <div className="form-floating">
          <input
            className="form-control"
            type="text"
            name="todo"
            id="todo"
            value={formData.todo}
            placeholder="todo"
            required
            onChange={handleChange}
          />
          <label className="label" htmlFor="todo">
            Todo:
          </label>
        </div>
      </div>
      <div className="col-1">
        <button className="btn btn-warning btn-lg">Add!</button>
      </div>
    </form>
  );
};

export default NewTodoForm;
