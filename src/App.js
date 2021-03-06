import React, { Component } from 'react';
import './App.css';
import uuid from 'react-uuid';
import TodoList from './TodoList';

const LOCAL_STORAGE_KEY = 'todoApp.todos2';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      inputTodo: "",
    }
  }

  componentWillMount() {
    const storedTodos =  JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storedTodos) {
      this.setState({
        todos: [...storedTodos]
      })
    }
  }

  getFormatedDate = () => {
    const d = new Date();
    const curr_date = d.getDate();
    const curr_month = d.getMonth();
    const curr_year = d.getFullYear();
    return `${curr_date}/${curr_month}/${curr_year}`
  }

  handleTodoInput = (e) => {
    this.setState({
      inputTodo:  e.target.value
    })
  }

  addTodo = () => {
    if (this.state.inputTodo !== "") {
      const newTodo = {
        id: uuid(),
        openDate: this.getFormatedDate(),
        closedDate: "",
        task: this.state.inputTodo,
        done: false
      }
      const updatedTodos = [newTodo, ...this.state.todos];
    
      this.setState({
        todos: updatedTodos,
        inputTodo: ""
      })

      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedTodos));
    }
  }

  deleteTodo = (e) => {
    const id = e.target.getAttribute('data-id');
    let newTodoList = this.state.todos.filter(todo => todo.id !== id);
    this.setState({
      todos: [...newTodoList]
    })
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTodoList));

  }

  handleDone = (e) => {
    const id = e.target.getAttribute('data-id');
    console.log(id);
    let closingDate;
    let newTodoList = this.state.todos.map(todo => {
      if (todo.id === id) {
        closingDate = todo.done ? "" : this.getFormatedDate();

        return {
          ...todo,
          closedDate: closingDate,
          done: !todo.done
        };
      }
      return todo;
    });

    this.setState({
      todos: [...newTodoList]
    })
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTodoList));
  }



  render() {
    return (
      <div className="App">
      <header>
        <h1>ToDos</h1>
        <div className="todo-input-box">
          <input type="text" placeholder="Write Todo here" name="todo" value={this.state.inputTodo} onChange={this.handleTodoInput}></input>
          <button onClick={this.addTodo} >Add</button>
        </div>
      </header>
      <div className="todos">
        <TodoList todoList={this.state.todos} handleDone={this.handleDone} deleteTodo={this.deleteTodo} />
      </div>
    </div>
    )
  }
}

export default App;
