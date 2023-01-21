import React from "react";

function Box({ id, boxColor, boxWidth, boxHeight, deleteBox }) {
  const handleClick = () => {
    deleteBox(id);
  };
  return (
    <div className="col boxDiv">
      <div
        style={{
          backgroundColor: boxColor,
          width: `${boxWidth}px`,
          height: `${boxHeight}px`,
        }}
        className="mx-2 mt-4"
      />
      <span>
        <button
          className="btn btn-danger btn-sm deleteBtn"
          onClick={handleClick}
        >
          x
        </button>
      </span>
    </div>
  );
}

export default Box;
