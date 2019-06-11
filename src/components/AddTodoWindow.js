import React, { Component } from "react";
import "../App.css";
const { ipcRenderer } = window.require("electron");

class AddTodoWindow extends Component {
  state = {
    value: ""
  };

  onChange = e => {
    this.setState({ value: e.target.value });
  };

  onClick = () => {
    ipcRenderer.send("todo:add", { text: this.state.value });
  };

  render() {
    return (
      <div class="add-todo">
        <h1 class="title">Add Todo</h1>
        <input 
          class="todo-input"
          autoFocus
          type="text"
          value={this.state.value}
          onChange={this.onChange}
          placeholder="Insert todo text"
        />
        <button class="todo-btn" onClick={this.onClick}>ADD</button>
      </div>
    );
  }
}

export default AddTodoWindow;
