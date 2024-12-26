import React, { useState } from "react";

function NewTodoForm({ addTodo }) {
    const [task, setTask] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (task.trim() === "") return;
        addTodo({ id: Date.now(), task });
        setTask("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="task"><strong>New Todo:</strong></label>
            <input
                id="task"
                name="task"
                value={task}
                onChange={(e) => setTask(e.target.value)}
            />
            <button>Add Todo</button>
        </form>
    );
}

export default NewTodoForm;