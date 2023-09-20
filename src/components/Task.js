import "./Task.css";
import data from "../data";

const Task = () => {
  return (
    <div>
      {data.map((oneTask) => {
        const { name } = oneTask;
        return (
          <div className="task-list">
            <h4>{name}</h4>
            <input type="checkbox" className="check"></input>
          </div>
        );
      })}
    </div>
  );
};

export default Task;
