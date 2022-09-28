import Task from "./Task";

function TasksToDo({ listTasks, deleteTask, changeStatus }) {
  const createList = () => {
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
          deleteTask={deleteTask}
        />
      );
    });
    return tasks;
  };

  const sortArray = (array) => {
    return array.sort(compareByTextTask);
  };

  const compareByTextTask = (a, b) => {
    a = a.toLowerCase();
    b = b.toLowerCase();
    if (a.text < b.text) return -1;
    if (a.text > b.text) return 1;
    return 0;
  };

  return (
    <div className="list-todo-tasks">
      <h1>Zadania do zrobienia</h1>
      {createList()}
    </div>
  );
}

export default TasksToDo;
