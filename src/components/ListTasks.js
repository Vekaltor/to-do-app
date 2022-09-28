import React from "react";
import TasksCompleted from "./TasksCompleted";
import TasksToDo from "./TasksToDo";

const ListTasks = ({ listTasks, deleteTask, changeStatus }) => {
  return (
    <div className="list-tasks">
      <TasksToDo
        listTasks={listTasks}
        deleteTask={deleteTask}
        changeStatus={changeStatus}
      />
      <TasksCompleted listTasks={listTasks} deleteTask={deleteTask} />
    </div>
  );
};

export default ListTasks;
