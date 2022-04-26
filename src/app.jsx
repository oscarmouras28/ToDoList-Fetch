import React, { Fragment, useState, useRef } from "react";
import { v4 as uuid } from 'uuid';
import ToDoList from "./components/ToDoList";
import Header from "./components/Header";
import 'bootstrap/dist/css/bootstrap.min.css';


export function App() {
    const ToDoRef = useRef();
    const [todos, setTodos] = useState([{}]);
    const ReadToDo = () => {
        fetch("https://assets.breatheco.de/apis/fake/todos/user/oscar").then((response) => response.json()).then((data) => setTodos(data))
    }
    const addToDo = () => {
        const label = ToDoRef.current.value;
        if (label === '') return;
        setTodos((prevTodo) => {
            return [...prevTodo, { id: uuid(), label, done: false }]
        })
        ToDoRef.current.value = null;
    }
    const toggleToDo = (id) => {
        const NewToDos = [...todos];
        const todo = NewToDos.find((todo) => todo.id === id);
        todo.done = !todo.done;
        setTodos(NewToDos);
    }

    fetch("https://assets.breatheco.de/apis/fake/todos/user/oscar", {
        "method": "PUT",
        "headers": {
            "Content-Type": "application/json"
        },
        "body": JSON.stringify(todos)
    })
        .then(response => {
            console.log(response);
        })
        .catch(err => {
            console.error(err);
        });

    return (
        <div className=" justify-content-center">
            <Header />
            <div className="container">
                <div className="input-group mb-3">
                    <a onClick={addToDo}><span className="input-group-text" id="basic-addon1">✏️+</span></a>
                    <input ref={ToDoRef} type="text"
                        className="form-control"
                        placeholder="Ingresar Tarea"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                    />
                </div>
                <div class="d-grid gap-2">
                    <button onClick={ReadToDo} class="btn btn-success">Listar</button>
                </div>
            </div>
            <div className="container">

                <ToDoList todos={todos} toggleToDo={toggleToDo} />
                <div class="progress">
                    <div className="progress-bar" role="progressbar" style={{ width: (100 / todos.filter((todos) => !todos.done).length) * (todos.filter((todos) => !todos.done).length - todos.filter((todos) => todos.done).length) }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">falta por enchular esto</div>
                </div>
            </div>
        </div>
    );

}