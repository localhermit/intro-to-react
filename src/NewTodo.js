import React, { Component } from 'react';
import './Todo.css';

class NewTodo extends Component {
    render() {
        return (
            <div class="input">
                <input type='text' placeholder="Add a task here!" id='idea' />
                <button id="add">Add</button>
            </div>
        );
    }
}

export default NewTodo;
