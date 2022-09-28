import Task from "./Task";

function CompletedTasks({ listTasks, deleteTask }) {
  const getNumberOfCompletedTasks = () => {
    let number = 0;
    listTasks.forEach((task) => {
      if (task.active === false) number++;
    });
    return number;
  };

  const createList = () => {
    let completedTasks = [];
    listTasks.forEach((task, index) => {
      if (task.active) return;
      completedTasks.push(
        <Task
          key={index}
          id={index}
          text={task.text}
          date={task.date}
          finishDate={task.finishDate}
          priority={task.priority}
          active={task.active}
          deleteTask={deleteTask}
        />
      );
    });
    let sortedCompletedTasks = sortArray(completedTasks);
    completedTasks = selectLastAddedCompletedTasks(5, sortedCompletedTasks);
    return completedTasks;
  };

  const selectLastAddedCompletedTasks = (limit, listTasks) => {
    let lastAddedCompletedTasks = [];
    lastAddedCompletedTasks = listTasks.slice(0, limit);
    return lastAddedCompletedTasks;
  };

  const sortArray = (array) => {
    return array.sort(compareByFinishDateTask);
  };

  const compareByFinishDateTask = (a, b) => {
    if (a.props.finishDate > b.props.finishDate) return -1;
    if (a.props.finishDate < b.props.finishDate) return 1;
    return 0;
  };

  return (
    <div className="list-completed-tasks">
      <h3>zrobione zadania ({getNumberOfCompletedTasks()})</h3>
      {getNumberOfCompletedTasks() > 5 ? (
        <span>(5 ostatnich zadań)</span>
      ) : null}
      {createList()}
    </div>
  );
}

export default CompletedTasks;
