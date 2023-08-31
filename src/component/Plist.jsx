
import Task from "./Task";
export default function Plist({ task, onDeleteTask, onToggle, onSaveEdit }) {
  
  return (
    <div className="ul-container">
      <ul>
        {task.map((item) => (
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
