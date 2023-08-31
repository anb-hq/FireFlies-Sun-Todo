import { useState } from "react";
import Task from "./Task";
import {AiOutlineDown} from 'react-icons/ai'
export default function Plist({ task, onDeleteTask, onToggle, onSaveEdit }) {
  const completedItems = task.filter((item) => item.complete);
  const allComItems = [...completedItems];
  const incompleteItems = task.filter((item) => !item.complete);
  const allIncomItems = [...incompleteItems];

  const [show, setShow] = useState(false);
console.log(show);
  return (
    <div className="ul-container">
      <p> tasks-------------------</p>
      <ul>
        {allIncomItems.map((item) => (
          <Task
            task={item}
            key={item.id}
            onDeleteTask={onDeleteTask}
            onToggle={onToggle}
            onSaveEdit={onSaveEdit}
          />
        ))}
      </ul>
      <div className="toggle" onClick={() => setShow(!show)}>
        <div className="toggle-switch">
          <AiOutlineDown />
        </div>
        <p>completed</p>
      </div>
      <ul className={show ? " hidden completed" : ""}>
        {allComItems.map((item) => (
          <Task
            task={item}
            key={item.id}
            onDeleteTask={onDeleteTask}
            onToggle={onToggle}
            onSaveEdit={onSaveEdit}
          />
        ))}
      </ul>
    </div>
  );
}
