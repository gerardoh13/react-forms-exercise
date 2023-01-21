import React, { useState } from "react";
import NewBoxForm from "./NewBoxForm";
import Box from "./Box";

const BoxList = ({ test }) => {
  const [boxes, setBoxes] = useState([]);
  const addBox = newBox => {
    setBoxes(prev => [...prev, newBox]);
  };

  const deleteBox = (id) => {
    setBoxes(prev => prev.filter(b => b.id !== id))
  };

  const boxComponents = boxes.map(b => (
    <Box
      key={b.id}
      id={b.id}
      boxColor={b.color}
      boxWidth={b.width}
      boxHeight={b.height}
      deleteBox={deleteBox}
    />
  ));
  return (
    <>
      <NewBoxForm addBox={addBox} test={test}/>
      <div className=" row justify-content-center">
        {boxComponents}
      </div>
    </>
  );
};

export default BoxList;
