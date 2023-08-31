import { PiTrashSimple } from "react-icons/pi";
import { LuFileEdit } from "react-icons/lu";
import { MdSaveAlt } from "react-icons/md";
import { BsCheckLg } from "react-icons/bs";

import { useState } from "react";

export default function Task({ task, onDeleteTask, onToggle, onSaveEdit, show }) {
  const [editTitle, setEditTitle] = useState("");
  const [editingItemId, setEditingItemId] = useState(null);

  function handleStartEdit(id, initialTitle) {
    setEditingItemId(id);
    setEditTitle(initialTitle);
  }

  function handleSaveEdit(id, newTitle) {
    console.log(editTitle);
    onSaveEdit(id, newTitle);
    setEditTitle("");
    setEditingItemId(null);
  }

  return (
    <li className={!task.complete ? "" : "completed"}>
      <div onClick={() => onToggle(task.id)} className="check-button">
        {task.complete ? <BsCheckLg className="green-tick"></BsCheckLg> : ""}
      </div>
      <div className="list-input">
        {editingItemId === task.id ? (
          <input
            type="text"
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
            onBlur={() =>
              handleSaveEdit(task.id, !editTitle ? task.title : editTitle)
            }
            onKeyDown={(e) => {
              if (e.key === "Enter")
                handleSaveEdit(task.id, !editTitle ? task.title : editTitle);
            }}
          />
        ) : (
          <div className="task-text">
            <span>{task.title}</span>
          </div>
        )}
      </div>
      <PiTrashSimple onClick={() => onDeleteTask(task.id)} className="trash" />

      {editingItemId === task.id ? (
        <>
          <MdSaveAlt
            className="edit-button"
            onClick={() =>
              handleSaveEdit(task.id, !editTitle ? task.title : editTitle)
            }
          >
            Save
          </MdSaveAlt>
        </>
      ) : (
        <LuFileEdit
          onClick={() => handleStartEdit(task.id, task.title)}
          className="edit-button"
        ></LuFileEdit>
      )}
    </li>
  );
}
