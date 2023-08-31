import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";


export default function Form({onAddTodo}) {
  const [title, setTitle] = useState("");
  function handleSubmit (e) {
    e.preventDefault()

    if(!title) return;
    setTitle("")
    const newTodo = {id: Date.now(), title, completed: false}
    onAddTodo(newTodo)
  }

  return (
    <form action="" onSubmit={handleSubmit}>
      <div className="">
      <input type="text" 
      placeholder="Todo list" 
      value={title}
      onChange={(e) => setTitle(e.target.value)}
      
      />
      <button>
        <AiOutlinePlus />
      </button>
      </div>
    </form>
  );
}



