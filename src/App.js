import { useState } from "react";
import BoxList from "./BoxList";
import TodoList from "./TodoList";
import Toggle from "./Toggle";
import "./App.css";

function App() {
  const [shown, setShown] = useState("boxes");

  const toggleApp = (tab) => {
    setShown(tab);
  };
  
  return (
    <div className="App">
      <Toggle toggleApp={toggleApp} />
      <h1 className="mb-4">
        {shown === "boxes" ? "Color Box Maker!" : "Todo List!"}
      </h1>
      {shown === "boxes" ? <BoxList /> : <TodoList />}
    </div>
  );
}

export default App;
