import React, { Component } from 'react';
import './App.css';
import Todo from './Todo';
import NewTodo from './NewTodo';

class App extends Component {
  render() {
    constructor() {
      super()
      this.state = {
        todos: [],
        somethingElse: ''
      }
      this.addTodo = this.addTodo.bind(this);
    }

    return (
      <div className="App">
        <h1>jiangkim's ToDo App</h1>
        <section id="myTodos">
          <NewTodo />
          <Todo />
        </section>
      </div>
    );
  }


}

export default App;
