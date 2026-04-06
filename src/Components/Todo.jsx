import { Save, Trash2 } from "lucide-react";
import React, { useEffect, useState } from "react";
const Todo = () => {
  const [input, setinput] = useState("");
  const [task, settask] = useState([]);
const [dateTime, setdateTime] = useState("")
  const onSubmitHandle = (e) => {
    e.preventDefault();
    if (!input)return 
    if (input.trim() == "") return;
    settask((prevTask)=>[...prevTask,input]);
    setinput(" ");
  };
   //cear call
   const clearAll=()=>{
     settask([])
   }
   //delet(
   const deletItem=(value)=>{
      let updateTask = task.filter((curElem)=>curElem !== value)
      settask(updateTask)
   }
      

  //date and time

  // setInterval(() => {
  //   const time = new Date();
  // const loccaltime = time.toLocaleTimeString();
  // const nowDate = time.toLocaleDateString();
  //    setdateTime(`${loccaltime} - ${nowDate}`)
  // }, 1000);
  
  // or
  useEffect(() => {
    const interval = setInterval(() => {
    const time = new Date();
  const loccaltime = time.toLocaleTimeString();
  const nowDate = time.toLocaleDateString();
     setdateTime(`${loccaltime} - ${nowDate}`)
  }, 1000);

  return ()=> clearInterval(interval)
  }, [])
  
  
  return (
    <div className="container">
      <div className="title">
        {dateTime}
      </div>
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
