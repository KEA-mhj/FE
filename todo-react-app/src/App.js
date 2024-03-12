import logo from "./logo.svg";
import "./App.css";
import Todo from "./Todo";
import React, { useState } from "react";

function App() {
  const [item, setItem] = useState([
    {
      id: "0",
      title: "Hello World 1",
      done: true,
    },
    {
      id: "1",
      title: "Hello World 2",
      done: false,
    },
  ]);

  return (
    <div className="App">
      <Todo item={item}></Todo>
    </div>
  );
}

export default App;
