import React from "react";
import TasksCompleted from "./TasksCompleted";
import TasksToDo from "./TasksToDo";

const ListTasks = () => {
  return (
    <div className="list-tasks">
      <TasksToDo />
      <TasksCompleted />
    </div>
  );
};

export default ListTasks;
