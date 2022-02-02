import React, { useRef, useState } from 'react';

const Header = () => {
    const DeleteList = () => {
        fetch("https://assets.breatheco.de/apis/fake/todos/user/oscar", {
            "method": "DELETE",
            "headers": {
                "Content-Type": "application/json"
            },
            "body": "false"
        })
            .then(() => {
                fetch("https://assets.breatheco.de/apis/fake/todos/user/oscar", {
                    "method": "POST",
                    "headers": {
                        "Content-type": "application/json"
                    },
                    "body": "[]"
                })
                    .then(response => {
                        console.log(response);
                    })
                    .catch(err => {
                        console.error(err);
                    });

            })
            .catch(err => {
                console.error(err);
            });
    }


    return (
        <nav className="navbar navbar-light bg-light mb-3 bg-light" id='navbar'>
            <div className="container d-flex justify-content-between">
                <h1 id='titulo'>To Do Fetch</h1>
                <button className="btn btn-outline-danger" onClick={DeleteList}> Eliminar lista actual</button>
            </div>
        </nav>
    );
}

export default Header;