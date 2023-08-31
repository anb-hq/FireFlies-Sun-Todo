import Task from "./Task";
export default function Plist({ items }) {
  return (
    <div className="ul-container">
      <ul>
        {items.map((item) => (
          <Task item={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
}
