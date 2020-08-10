import React from 'react';
import Todo from './Todo';

function TodoList( { todoList, handleDone, deleteTodo }) {
    return (
        <div className="todo-list">
            { todoList.map(todo => <Todo key={todo.id} todo={todo} handleDone={handleDone} deleteTodo={deleteTodo} />) }
        </div>
    );
}

export default TodoList;
