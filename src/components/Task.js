import { RiDeleteBinLine } from "react-icons/ri";

function Task(props) {
  const { id, text, date, finishDate, priority, active } = props;

  return (
    <>
      {active ? (
        <div className={priority ? "task priority" : "task"} id={id}>
          <div className="content">
            <span className="text">{text} - </span>
            <span className="date">{`do ${date}`}</span>
          </div>
          <div className="options">
            <button className="status" onClick={() => props.changeStatus(id)}>
              Zostało zrobione
            </button>
            <RiDeleteBinLine />
            <div className="delete" onClick={() => props.deleteTask(id)}></div>
          </div>
        </div>
      ) : (
        <div className="task" id={id}>
          <div className="content">
            {console.log(props)}
            <span className="text">{text}</span>
            <span className="date">{` (zrobić do ${date})`}</span>
            <span className="finish-date">- wykonane dnia {finishDate}</span>
          </div>
          <div className="options">
            <RiDeleteBinLine />
            <div className="delete" onClick={() => props.deleteTask(id)}></div>
          </div>
        </div>
      )}
    </>
  );
}

export default Task;
