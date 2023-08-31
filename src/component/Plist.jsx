import Task from "./Task";
export default function Plist({ items, onDeleteTask, onToggle }) {
  return (
    <div className="ul-container">
      <ul>
        {items.map((item) => (
          <Task item={item} key={item.id} onDeleteTask={onDeleteTask} onToggle={onToggle}/>
        ))}
      </ul>
    </div>
  );
}
