/* eslint-disable eqeqeq */
import React, { Component } from "react";
import AddTask from "./AddTask";

import ListTasks from "./ListTasks";
class Panel extends Component {
  state = {
    historyListTasks: [],
    listTasks: [],
  };

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
        <AddTask
          listTasks={this.state.listTasks}
          addTask={this.handleClickAddTask.bind(this)}
        />
        <ListTasks
          listTasks={this.state.listTasks}
          completedTasks={this.state.completedTasks}
          deleteTask={this.handleClickDeleteTask.bind(this)}
          changeStatus={this.changeStatus.bind(this)}
        />
      </div>
    );
  }
}

export default Panel;
