import Task from "./Task";
import { ToDoContext } from "./ToDoContext";

function TasksToDo() {
  const createList = (listTasks, clickDeleteTask, changeStatus) => {
    let tasks = [];
    let sortedListTasks = sortArray(listTasks);
    sortedListTasks.forEach((task) => {
      if (!task.active) return;
      tasks.push(
        <Task
          key={task.id}
          id={task.id}
          text={task.text}
          date={task.date}
          finishDate={task.finishDate}
          priority={task.priority}
          active={task.active}
          changeStatus={changeStatus}
          deleteTask={clickDeleteTask}
        />
      );
    });
    return tasks;
  };

  const sortArray = (array) => {
    return array.sort(compareByTextTask);
  };

  const compareByTextTask = (a, b) => {
    a = a.text.toLowerCase();
    b = b.text.toLowerCase();
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
  };

  return (
    <div className="list-todo-tasks">
      <h1>Zadania do zrobienia</h1>
      <ToDoContext.Consumer>
        {({ listTasks, clickDeleteTask, changeStatus }) =>
          createList(listTasks, clickDeleteTask, changeStatus)
        }
      </ToDoContext.Consumer>
    </div>
  );
}

export default TasksToDo;
