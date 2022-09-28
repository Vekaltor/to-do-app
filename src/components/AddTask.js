import React, { Component } from "react";

class AddTask extends Component {
  state = {
    contentTask: "",
    priority: false,
    date: "",
  };

  handleChangeContentTask(e) {
    let newContentTask = e.target.value;
    this.setState({
      contentTask: newContentTask,
    });
  }

  handleChangePriority() {
    this.setState((prevState) => ({
      priority: !prevState.priority,
    }));
  }

  handleChangeDate(e) {
    let selectedDate = e.target.value;
    this.setState({
      date: selectedDate,
    });
  }

  handleClick = (e) => {
    e.preventDefault();
    if (!this.state.contentTask || !this.state.date) return;
    let task = this.createTask();
    this.props.addTask(task);
  };

  createTask() {
    let text = this.state.contentTask;
    let date = this.state.date;
    let priority = this.state.priority;
    let task = {
      text: text,
      date: date,
      priority: priority,
      finishDate: null,
      active: true,
    };
    return task;
  }

  setMinDateForInputTypeDate() {
    let currentDate = new Date().toLocaleDateString();
    let day = currentDate.slice(0, 2);
    let month = currentDate.slice(3, 5);
    let year = currentDate.slice(6, 10);
    let changedPatternDate = year + "-" + month + "-" + day;
    return changedPatternDate;
  }

  render() {
    return (
      <div className="form-to-add-task">
        <form>
          <label>
            <input
              type="text"
              placeholder="dodaj zadanie"
              value={this.state.contentTask}
              onChange={this.handleChangeContentTask.bind(this)}
            />
          </label>
          <label>
            <input
              type="checkbox"
              checked={this.state.priority}
              onChange={this.handleChangePriority.bind(this)}
            />
            Priorytet
          </label>
          <label>
            Do kiedy zrobić{" "}
            <input
              type="date"
              value={this.state.date}
              onChange={this.handleChangeDate.bind(this)}
              min={this.setMinDateForInputTypeDate()}
            />
          </label>
          <button onClick={(e) => this.handleClick(e)}>DODAJ</button>
        </form>
      </div>
    );
  }
}

export default AddTask;
