import React, { Component } from "react";
const { ipcRenderer } = window.require("electron");

class MainWindow extends Component {
  state = {
    todos: []
  };

  componentDidMount() {
    ipcRenderer.send("todo:list");

    ipcRenderer.on("todo:list", (event, data) => {
      this.setState({ todos: data });
    });
    ipcRenderer.on("todo:add", (event, data) => {
      this.setState({ todos: [...this.state.todos, data] });
    });
    ipcRenderer.on("todo:clear", event => {
      this.setState({ todos: [] });
    });
  }

  renderTodos = () => {
    return this.state.todos.map(todo => <li key={todo.id}>{todo.text}</li>);
  };

  render() {
    return (
      <div class="main-window">
        <h1 class="title">Todos</h1>
        <ul class="todos">{this.renderTodos()}</ul>
      </div>
    );
  }
}

export default MainWindow;
