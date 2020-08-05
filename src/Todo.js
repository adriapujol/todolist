import React from 'react';
import './Todo.css';

function Todo(props) {
    const handleDone = props.handleDone;
    const { id, openDate, closedDate, task, done} = props.todo;
    const todoContainerClasses = done ? "todo-container todo-done" : "todo-container";
    return (
        <div className={todoContainerClasses}>
            <div className="controls">
                <div className="date">
                    <div>Date opened: {openDate}</div>
                    <div>Date closed: {closedDate} </div>
                </div>
                <div className="btns">
                    <button className="btn-done-todo" data-id={id} onClick={handleDone}>done</button>
                    <button className="btn-delete-todo">X</button>
                </div>
            </div>
            <div className="todo-block">
                <h3>{task}</h3>
            </div>
        </div>
    );
}

export default Todo;
