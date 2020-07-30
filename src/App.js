import React, { useState, Component } from 'react';
import './App.css';
import uuid from 'react-uuid';
import TodoList from './TodoList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      inputTodo: "",
      currentTodo: {
        id: "",
        open: "",
        task: ""
      }
    }
  }

  handleTodoInput = (e) => {
    this.setState({
      inputTodo:  e.target.value
    })
  }

  addTodoState = () => {
    this.setState({
      currentTodo: {
        id: uuid(),
        open: new Date(),
        task: this.state.inputTodo
      },
      todos: [this.state.currentTodo, ...this.state.todos]
    })

  }

  // addTodo = () => {
  //   this.setState({
  //     currentTodo: {
  //       id: uuid(),
  //       open: new Date(),
  //       task: this.state.inputTodo
  //     },
  //     todos: [this.state.currentTodo, ...this.state.todos]
  //   })

  // }

  addTodo = () => {
    this.setState({
      todos: [this.state.currentTodo, ...this.state.todos]
    })

  }

  render() {
    return (
      <div className="App">
      <header>
        <h1>ToDos</h1>
        <div className="todo-input-box">
          <input type="text" placeholder="Write Todo here" name="todo" value={this.state.inputTodo} onChange={this.handleTodoInput}></input>
          <button onClick={this.addTodoState} >Todo Into State</button>
          <button onClick={this.addTodo} >Add</button>
        </div>
      </header>
      <div className="todos">
        hi
      </div>
    </div>
    )
  }
}

export default App;
