import React, { useState, useEffect } from 'react';
import { NewTodoForm } from './NewTodoForm';
import { TodoList } from './TodoList';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  
  useEffect(() => {
    fetch('/todos')  // gets the latest todos from the backend
      .then(response => response.json())
      .then(todos => setTodos(todos));
  }, []);
  // useEffect hook allows us to dispatch certain actions
  // whenever the components are rendered or updates
  
  const createNewTodo = newTodoText => {
    fetch('/todos', {
      method: 'post',
      body: JSON.stringify({ newTodoText }),
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then(response => response.json())
      .then(updateTodos => setTodos(updateTodos));
  }

  const deleteTodo = todoText => {
    fetch('/todos/delete', {
      method: 'post',
      body: JSON.stringify({ text: todoText }),
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then(response => response.json())
      .then(updateTodos => setTodos(updateTodos));
  }

  const completeTodo = todoText => {
    fetch('/todos/complete', {
      method: 'post',
      body: JSON.stringify({ text: todoText }),
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then(response => response.json())
      .then(updateTodos => setTodos(updateTodos));
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
