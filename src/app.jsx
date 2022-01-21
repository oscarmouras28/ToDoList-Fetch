import React, { Fragment, useState, useRef } from "react";
import { v4 as uuid } from 'uuid';
import ToDoList from "./components/ToDoList";

export function App() {
    const [todos, setTodos] = useState([{ id: 1, label: "terminar esto aa", completed: false },]);
    const ToDoRef = useRef();
    const toggleToDo = (id) => {
        const NewToDos = [...todos];
        const todo = NewToDos.find((todo) => todo.id === id);
        todo.completed = !todo.completed;
        setTodos(NewToDos);
    }
    const addToDo = () => {
        const label = ToDoRef.current.value;

        if (label === '') return;

        setTodos((prevTodo) => {
            return [...prevTodo, { id: uuid(), label, completed: false }]
        })

        ToDoRef.current.value = null;
    }
    const deleteToDo = () => {
        const NewToDos = todos.filter((todo)=> !todo.completed)
        setTodos(NewToDos);
    }
    return (
        <Fragment>
            <input ref={ToDoRef} type="text" placeholder="ingrrese tarea" />
            <button onClick={addToDo}>+</button>
            <button onClick={deleteToDo} style={{ color: 'red', padding: '0% 10% 0% 10%' }}>X</button>
            <ToDoList todos={todos} toggleToDo={toggleToDo} />
            <p>{todos.filter((todos) => !todos.completed).length} tareas left </p>
        </Fragment>
    );

}