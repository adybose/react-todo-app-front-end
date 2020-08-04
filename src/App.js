import React, { useState, useEffect } from 'react';
import { NewTodoForm } from './NewTodoForm';
import { TodoList } from './TodoList';
import './App.css';

let fakeTodos = [
  {
    text: 'Go to the grocery store',
    isCompleted: true,
  },
  {
    text: 'Learn React',
    isCompleted: false,
  },
  {
    text: 'Commit Changes',
    isCompleted: false,
  }
]

function App() {
  const [todos, setTodos] = useState([]);
  
  useEffect(() => {
    fetch('/todos')
      .then(response => response.json())
      .then(todos => setTodos(todos));
  }, []);
  // useEffect hook allows us to dispatch certain actions
  // whenever the components are rendered or updates
  
  const createNewTodo = newTodoText => {
    alert('Creating new Todo with the text: ' + newTodoText);
  }

  const deleteTodo = todoText => {
    alert('Deleting Todo with the text: ' + todoText);
  }

  const completeTodo = todoText => {
    alert('Marking Todo as completed with the text: ' + todoText);
  }

  return (
    <div className="App">
      <h1>React Todo App</h1>
      <NewTodoForm onClickCreate={createNewTodo} />
      <TodoList
        todos={todos}
        onCompleteTodo={completeTodo}
        onDeleteTodo={deleteTodo} />
    </div>
  );
}

export default App;
