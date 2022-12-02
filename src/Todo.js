import React, { Component } from 'react';
import NewTodo from './NewTodo';
import './Todo.css';

class Todo extends Component {
    render() {
        return (
            <div className="todo">
                <input class = "boxes" type = "checkbox"></input>
                <h3>New Todo Item</h3>
                <p>{this.props.text}</p>
                <p>{this.props.text}</p>
                <button class = "delete"> Delete </button>
            </div>
        );
    }
}

export default Todo;
