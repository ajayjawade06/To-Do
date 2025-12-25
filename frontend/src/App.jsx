import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import './App.css';

const API_BASE_URL = 'http://localhost:3001/todos';

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const response = await axios.get(API_BASE_URL);
      setTodos(response.data);
    } catch (error) {
      console.error('Error fetching todos:', error);
    }
  };

  const addTodo = async (title) => {
    try {
      const response = await axios.post(API_BASE_URL, { title });
      setTodos([...todos, response.data]);
    } catch (error) {
      console.error('Error adding todo:', error);
    }
  };

  const toggleTodo = async (id) => {
    try {
      const todo = todos.find(t => t._id === id);
      const response = await axios.patch(`${API_BASE_URL}/${id}`, { completed: !todo.completed });
      setTodos(todos.map(t => t._id === id ? response.data : t));
    } catch (error) {
      console.error('Error toggling todo:', error);
    }
  };

  const deleteTodo = async (id) => {
    try {
      await axios.delete(`${API_BASE_URL}/${id}`);
      setTodos(todos.filter(t => t._id !== id));
    } catch (error) {
      console.error('Error deleting todo:', error);
    }
  };

  const updateTodoTitle = async (id, newTitle) => {
    try {
      const response = await axios.put(`${API_BASE_URL}/${id}`, { title: newTitle });
      setTodos(todos.map(t => t._id === id ? response.data : t));
    } catch (error) {
      console.error('Error updating todo title:', error);
    }
  };

  return (
    <div className="app">
      <h1>Todo App</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} updateTodoTitle={updateTodoTitle} />
    </div>
  );
}

export default App;