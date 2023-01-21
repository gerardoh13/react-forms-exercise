import React from "react";

const Toggle = ({ toggleApp }) => {
  const handleChange = (e) => {
    toggleApp(e.target.value);
  };
  return (
    <div className="row mb-3 mt-5">
      <div className="col">
        <input
          type="radio"
          className="btn-check"
          name="display"
          id="boxes"
          value="boxes"
          defaultChecked
          onChange={handleChange}
        />
        <label className="btn btn-outline-secondary" htmlFor="boxes">
          Boxes
        </label>
      </div>
      <div className="col">
        <input
          type="radio"
          className="btn-check"
          name="display"
          id="todo"
          value="todo"
          onChange={handleChange}
        />
        <label className="btn btn-outline-secondary" htmlFor="todo">
          Todos
        </label>
      </div>
    </div>
  );
};

export default Toggle;
