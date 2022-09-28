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
    let newListTasks = [...this.state.listTasks];
    newListTasks.push(task);
    this.updateListTasks(newListTasks);
  }

  handleClickDeleteTask(id) {
    let idTask = id;
    let newListTasks = this.state.listTasks.filter(
      (task, index) => index != idTask
    );
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
    const prevListTasks = listTasks.map((task) => task);
    const historyTasks = historyListTasks.map((historyTasks) => historyTasks);
    historyTasks.push(prevListTasks);
    return historyTasks;
  }

  changeStatus(id) {
    let idTask = id;
    let newListTasks = this.state.listTasks.map((task, index) => {
      if (index == idTask) {
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
