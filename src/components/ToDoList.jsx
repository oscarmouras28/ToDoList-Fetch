import React from 'react';
import ToDoItem from './ToDoItem';

const ToDoList = ({ todos, toggleToDo }) => {
    return (
        <ul>
            {todos.map((todo) => (
                <ToDoItem key={todo.id} todo={todo} toggleToDo= {toggleToDo} />
            ))}
        </ul>
    );
}

export default ToDoList;