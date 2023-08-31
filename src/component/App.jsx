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
  return (
    <div className="app">
      <Form onAddTodo={handleAddTask}/>
      <Plist
      items={item}
      
      />
    </div>
  );
}

export default App;
