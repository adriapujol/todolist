import React from 'react';
import './Todo.css';

function Todo(props) {
    const handleDone = props.handleDone;
    const deleteTodo = props.deleteTodo;
    const { id, openDate, closedDate, task, done} = props.todo;
    const todoContainerClasses = done ? "todo-container todo-done" : "todo-container";
    const todoCrossed = done ? "todo-block todo-crossed" : "todo-block";
    return (
        <div className={todoContainerClasses}>
            <div className="controls">
                <div className="date">
                    <div>Date opened: {openDate}</div>
                    <div>Date closed: {closedDate} </div>
                </div>
                <div className="btns">
                    <button className="btn-done-todo" data-id={id} onClick={handleDone}>done</button>
                    <button className="btn-delete-todo" data-id={id} onClick={deleteTodo}>X</button>
                </div>
            </div>
            <div className={todoCrossed}>
                <h3>{task}</h3>
            </div>
        </div>
    );
}

export default Todo;
