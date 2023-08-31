import {PiTrashSimple} from 'react-icons/pi'
export default function Task({item, onDeleteTask, onToggle}) {
  return (
    <li>
      <input type="checkbox" onClick={() => onToggle(item.id)} />
      <div className="">
        <span className="">{item.title}</span>
      </div>
      <PiTrashSimple onClick={() => onDeleteTask(item.id)}></PiTrashSimple>
    </li>
  );
}