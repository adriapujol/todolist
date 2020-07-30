import React from 'react';
import Todo from './Todo';

function TodoList( { todoList, handleDone }) {
    return (
        <div className="todo-list">
            { todoList.map(todo => <Todo key={todo.id} todo={todo} handleDone={handleDone} />) }
        </div>
    );
}

export default TodoList;
