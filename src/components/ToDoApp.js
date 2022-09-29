/* eslint-disable eqeqeq */
import React, { PureComponent } from "react";

import { ToDoContext, defaultObject } from "./ToDoContext";

import AddTask from "./AddTask";
import ListTasks from "./ListTasks";

class ToDoApp extends PureComponent {
  state = {
    historyListTasks: defaultObject.historyListTasks,
    listTasks: defaultObject.listTasks,
  };

  counterId = this.state.listTasks.length;

  increaseCounterId() {
    this.counterId = this.counterId + 1;
  }

  handleClickAddTask(task) {
    console.log(task);
    let newListTasks = [...this.state.listTasks];
    newListTasks.push(task);
    this.updateListTasks(newListTasks);
  }

  handleClickDeleteTask(id) {
    let idTaskToDelete = id;
    let listTasks = [...this.state.listTasks];
    let newListTasks = listTasks.filter((task) => task.id != idTaskToDelete);
    this.updateListTasks(newListTasks);
  }

  updateListTasks(newListTasks) {
    this.setState((prevState) => ({
      historyListTasks: this.addPrevListTasksToHistory(
        prevState.listTasks,
        prevState.historyListTasks
      ),
      listTasks: newListTasks,
    }));
  }

  addPrevListTasksToHistory(listTasks, historyListTasks) {
    const prevListTasks = [...listTasks];
    const historyTasks = [...historyListTasks];
    historyTasks.push(prevListTasks);
    return historyTasks;
  }

  changeStatus(id) {
    let idChangedTask = id;
    let listTasks = [...this.state.listTasks];
    let newListTasks = listTasks.map((task) => {
      if (task.id == idChangedTask) {
        task.active = false;
        task.finishDate = this.createFinishDate();
      }
      return task;
    });
    this.updateListTasks(newListTasks);
  }

  createFinishDate() {
    let currentDate =
      new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString();
    return currentDate;
  }

  render() {
    return (
      <div>
        <ToDoContext.Provider
          value={{
            listTasks: this.state.listTasks,
            counterId: this.counterId,
            increaseCounterId: this.increaseCounterId.bind(this),
            clickAddTask: this.handleClickAddTask.bind(this),
            clickDeleteTask: this.handleClickDeleteTask.bind(this),
            changeStatus: this.changeStatus.bind(this),
          }}
        >
          <AddTask />
          <ListTasks />
        </ToDoContext.Provider>
      </div>
    );
  }
}

export default ToDoApp;
