import { useState } from "react";
import "../index.css";
import "../Style/App.css";
import Form from "./Form";
import Plist from "./Plist";

function App() {
  const [item, setItem] = useState([])

  function handleAddTask (item) {
    setItem((items) => [item, ...items])
  }
  function handleDeleteTask(id) {
    setItem((items) => items.filter((item) => item.id !== id));
  }

  return (
    <div className="app">
      <Form onAddTodo={handleAddTask} />
      <Plist items={item} onDeleteTask={handleDeleteTask} />
    </div>
  );
}

export default App;
