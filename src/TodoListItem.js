import React from 'react';


// we pass 3 items as props to TodoListItem
// one is the todo item, and the other 2 are actions that are hooked to the corresponding buttons
export const TodoListItem = ({ todo, onClickComplete, onClickDelete }) => (
    <div>
        <h3>{todo.text}</h3>
        {
            todo.isCompleted ? <p>Completed!!!</p>: <button
            onClick={() => onClickComplete(todo.text)}
        >Mark as Complete</button>
        }
        <button
            onClick={() => onClickDelete(todo.text)}
        >Delete</button>
    </div>
)