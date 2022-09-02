import { FaTimes } from "react-icons/fa";
import {useState} from "react";

const Task = ({ task, onDelete }) => {
  const [done, setDone] = useState(true)
  return (
    <div className={done ? "task" : "task ciz"} onDoubleClick={() => setDone(!done)}>
      <h3>
        {task.text} <FaTimes style={{ color: "#D92323", cursor: "pointer" }} onClick={() => onDelete(task.id)} />
      </h3>
      <p>{task.day}</p>
    </div>
  );
};

export default Task;
