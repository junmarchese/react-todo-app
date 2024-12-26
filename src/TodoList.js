import React, { useState } from "react";
import NewTodoForm from "./NewTodoForm";
import Todo from "./Todo";

function TodoList() {
    const [todos, setTodos] = useState([]);

    const addTodo = (newTodo) => {
        setTodos((todos) => [...todos, newTodo]);
    };

    const removeTodo = (id) => {
        setTodos((todos) => todos.filter((todo) => todo.id !== id));
    };

    return (
        <div>
            <NewTodoForm addTodo={addTodo} />
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        <Todo id={todo.id} task={todo.task} removeTodo={removeTodo} />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;
