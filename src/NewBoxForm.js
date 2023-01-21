import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

// import "./Box.css";

const NewBoxForm = ({ addBox, test }) => {
  const INITIAL_STATE = {
    color: "",
    height: "",
    width: "",
  };
  const [formData, setFormData] = useState(INITIAL_STATE);
  const [valid, setValid] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((data) => ({
      ...data,
      [name]: value,
    }));
  };

  const validateData = () => {
    if (test) return true;
    let validColor = CSS.supports("color", formData.color);
    setValid(validColor);
    return validColor;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateData()) {
      addBox({ ...formData, id: uuidv4() });
      setFormData(INITIAL_STATE);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="row">
      <div className="col-3">
        <div className="form-floating">
          <input
            className="form-control"
            type="text"
            name="color"
            id="color"
            value={formData.color}
            placeholder="color"
            required
            onChange={handleChange}
          />
          <label className="label" htmlFor="color">
            Color:
          </label>
          {!valid ? <span className="text-danger">Invalid color!</span> : null}
        </div>
      </div>
      <div className="col-3">
        <div className="form-floating">
          <input
            className="form-control"
            type="number"
            name="height"
            id="height"
            value={formData.height}
            placeholder="height"
            required
            onChange={handleChange}
          />
          <label className="label" htmlFor="height">
            Height:
          </label>
        </div>
      </div>
      <div className="col-3">
        <div className="form-floating">
          <input
            className="form-control"
            type="number"
            name="width"
            id="width"
            value={formData.width}
            placeholder="width"
            required
            onChange={handleChange}
          />
          <label className="label" htmlFor="width">
            Width:
          </label>
        </div>
      </div>

      <div className="col-2">
        <button className="btn btn-warning btn-lg">New Box</button>
      </div>
    </form>
  );
};

export default NewBoxForm;
