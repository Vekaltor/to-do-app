import Task from "./Task";
import { ToDoContext } from "./ToDoContext";

function CompletedTasks() {
  const getNumberOfCompletedTasks = (listTasks) => {
    let number = 0;
    listTasks.forEach((task) => {
      if (task.active === false) number++;
    });
    return number;
  };

  const createList = (listTasks, clickDeleteTask) => {
    let completedTasks = [];
    listTasks.forEach((task) => {
      if (task.active) return;
      completedTasks.push(
        <Task
          key={task.id}
          id={task.id}
          text={task.text}
          date={task.date}
          finishDate={task.finishDate}
          priority={task.priority}
          active={task.active}
          deleteTask={clickDeleteTask}
        />
      );
    });
    let sortedCompletedTasks = sortArray(completedTasks);
    completedTasks = selectLastCompletedTasks(5, sortedCompletedTasks);
    return completedTasks;
  };

  const selectLastCompletedTasks = (limit, listTasks) => {
    let lastAddedCompletedTasks = [];
    lastAddedCompletedTasks = listTasks.slice(0, limit);
    return lastAddedCompletedTasks;
  };

  const sortArray = (array) => {
    return array.sort(compareByFinishDateTask);
  };

  const compareByFinishDateTask = (a, b) => {
    a = a.props.finishDate.toLowerCase();
    b = b.props.finishDate.toLowerCase();
    if (a > b) return -1;
    if (a < b) return 1;
    return 0;
  };

  return (
    <ToDoContext.Consumer>
      {({ listTasks, clickDeleteTask }) => (
        <div className="list-completed-tasks">
          <h3>zrobione zadania ({getNumberOfCompletedTasks(listTasks)})</h3>

          {getNumberOfCompletedTasks(listTasks) > 5 ? (
            <span>(5 ostatnich zadań)</span>
          ) : null}
          {createList(listTasks, clickDeleteTask)}
        </div>
      )}
    </ToDoContext.Consumer>
  );
}

export default CompletedTasks;
