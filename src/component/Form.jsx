import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";


export default function Form() {
  const [title, setTitle] = useState("");
  function handleSubmit (e) {
    e.preventDefault()

    if(!title) return;
    setTitle("")
    console.log(title)
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



