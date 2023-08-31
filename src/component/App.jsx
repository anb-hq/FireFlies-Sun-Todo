import { useState } from "react";
import "../index.css";
import "../Style/App.css";
import Form from "./Form";
import Plist from "./Plist";

function App() {
  const [task, setTask] = useState([]);

  function handleAddTask(item) {
    setTask((items) => [item, ...items]);
  }
  function handleDeleteTask(id) {
    setTask((items) => items.filter((item) => item.id !== id));
  }

  function handleToggle(id) {
    setTask((items) =>
      items.map((item) =>
        item.id === id ? { ...item, complete: !item.complete } : item
      )
    );
  }

  function handleSaveEdit(id, newTitle) {
    setTask((item) =>
      item.map((it) => (it.id === id ? { ...it, title: newTitle } : it))
    );
  }

  return (
    <div className="app">
      <h1>📌 WAKE UP</h1>
      <Form onAddTodo={handleAddTask} />
      <Plist
        task={task}
        onDeleteTask={handleDeleteTask}
        onToggle={handleToggle}
        onSaveEdit={handleSaveEdit}
      />
    </div>
  );
}

export default App;
