import {PiTrashSimple} from 'react-icons/pi'
export default function Task({item, onDeleteTask}) {
  return (
    <li>
      <div className="">
        <span className="">{item.title}</span>
      </div>
      <PiTrashSimple onClick={() =>onDeleteTask(item.id)}></PiTrashSimple>
    </li>
  );
}