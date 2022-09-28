/* eslint-disable eqeqeq */
import React, { Component } from "react";
import AddTask from "./AddTask";

import ListTasks from "./ListTasks";
class Panel extends Component {
  state = {
    listTasks: [],
  };

  handleClickAddTask(task) {
    let newListTasks = [...this.state.listTasks];
    newListTasks.push(task);
    this.updateListTasks(newListTasks);
  }

  handleClickDeleteTask(element) {
    let task = element.parentNode.parentNode;
    let idTask = task.id;
    let newListTasks = this.state.listTasks.filter(
      (task, index) => index != idTask
    );
    this.updateListTasks(newListTasks);
  }

  updateListTasks(newListTasks) {
    this.setState({
      listTasks: newListTasks,
    });
  }

  changeStatus(element) {
    let task = element.parentNode.parentNode;
    let idTask = task.id;
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
