import { RiDeleteBinLine } from "react-icons/ri";

function Task({
  id,
  text,
  date,
  finishDate,
  priority,
  active,
  deleteTask,
  changeStatus,
}) {
  return (
    <>
      {active ? (
        <div className={priority ? "task priority" : "task"} id={id}>
          <div className="content">
            <span className="text">{text} - </span>
            <span className="date">{`do ${date}`}</span>
          </div>
          <div className="options">
            <button className="status" onClick={(e) => changeStatus(e.target)}>
              Zostało zrobione
            </button>
            <RiDeleteBinLine />
            <div className="delete" onClick={(e) => deleteTask(e.target)}></div>
          </div>
        </div>
      ) : (
        <div className="task" id={id}>
          <div className="content">
            <span className="text">{text}</span>
            <span className="date">{` (zrobić do ${date})`}</span>
            <span className="finish-date">- wykonane dnia {finishDate}</span>
          </div>
          <div className="options">
            <RiDeleteBinLine />
            <div className="delete" onClick={(e) => deleteTask(e.target)}></div>
          </div>
        </div>
      )}
    </>
  );
}

export default Task;
