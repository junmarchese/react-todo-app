import React from "react";

function Todo({ id, task, removeTodo }) {
    const handleRemove = () => removeTodo(id);

    return (
        <>
            {task}
            <button onClick={handleRemove}><strong>X</strong></button>
        </>
    );
} 

export default Todo;
