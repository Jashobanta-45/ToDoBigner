import { Save, Trash2 } from "lucide-react";
import React, { useEffect, useState } from "react";
import DateTime from "./DateTime";

const TODODATA = "localData";
const Todo = () => {
  const [input, setinput] = useState("");
const [task, setTask] = useState(() => {
    const rawData = localStorage.getItem(TODODATA);
    if (!rawData) return [];
    return JSON.parse(rawData);
  });
  const onSubmitHandle = (e) => {
    e.preventDefault();
    if (!input)return 
    if (input.trim() == "") return;
    setTask((prevTask)=>[...prevTask,input]);
    setinput(" ");
  };
   //cear call
   const clearAll=()=>{
     setTask([])
   }
   //delet(
   const deletItem=(value)=>{
      let updateTask = task.filter((curElem)=>curElem !== value)
      setTask(updateTask)
   }
       
  // LOcal Storage
  useEffect(() => {
    localStorage.setItem(TODODATA, JSON.stringify(task));
  }, [task]);
  
  return (
    <div className="container">
      <DateTime/>
      <form onClick={onSubmitHandle}>
        <input
          type="text"
          placeholder="Enter time..."
          onChange={(e) => {
            setinput(e.target.value);
          }}
          value={input}
        />

        <button>
          Save
          <Save />
        </button>
      </form>
      {task.map((item, index) => (
        <section className="sect" key={index}>
          <div className="sec">
            <h1>{item}</h1>

            <div className="icon" onClick={()=>{deletItem(item)}}>
              <Trash2 strokeWidth={2.75} />
            </div>
          </div>
        </section>
      ))}
      <button className="clear" onClick={clearAll}>
        Clear All
        <Trash2 strokeWidth={2.75} />
      </button>
    </div>
  );
};

export default Todo;
