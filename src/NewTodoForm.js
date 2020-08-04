import React, { useState } from 'react';

export const NewTodoForm = ({ onClickCreate }) => {
    const [inputValue, setInputValue] = useState('');  // useState hook to setInputValue to inputValue
    return (
        <div>
            <input
                type="text"
                value={inputValue}
                onChange={e => setInputValue(e.target.value)} />
            <button
                onClick={() => {
                    onClickCreate(inputValue);
                    setInputValue('')
                }}
            >Create</button>
        </div>
    );
}