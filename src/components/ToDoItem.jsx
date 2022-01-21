import React from 'react';

const ToDoItem = ({ todo, toggleToDo }) => {
    const { id, label, completed } = todo;
    const ToDoClick = () =>{
        toggleToDo(id);
        
    };
    return (
        <li>
            <input type="checkbox" checked={completed} onChange={ToDoClick} />
            {label}
        </li>
    );
}

export default ToDoItem;