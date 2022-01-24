import React from 'react';

const ToDoItem = ({ todo, toggleToDo }) => {
    const { id, label, done } = todo;
    const ToDoClick = () =>{
        toggleToDo(id);
        };
    return (
        <li>
            <input type="checkbox" checked={done} onChange={ToDoClick} />
            {label}
        </li>
    );
}

export default ToDoItem;