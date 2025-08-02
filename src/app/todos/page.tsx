'use client';

import { useState, useEffect } from 'react';

interface Todo {
  _id: string;
  text: string;
  completed: boolean;
}

export default function TodoPage() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState('');

  useEffect(() => {
    const fetchTodos = async () => {
      const res = await fetch('/api/todos');
      const data = await res.json();
      setTodos(data);
    };
    fetchTodos();
  }, []);

  const addTodo = async () => {
    const res = await fetch('/api/todos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text: newTodo }),
    });
    const data = await res.json();
    setTodos([...todos, data]);
    setNewTodo('');
  };

  const updateTodo = async (id: string, completed: boolean) => {
    const res = await fetch(`/api/todos/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ completed }),
    });
    const data = await res.json();
    setTodos(todos.map((todo) => (todo._id === id ? data : todo)));
  };

  const deleteTodo = async (id: string) => {
    await fetch(`/api/todos/${id}`, {
      method: 'DELETE',
    });
    setTodos(todos.filter((todo) => todo._id !== id));
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Todo List</h1>
      <div className="flex mb-4">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          className="border p-2 flex-grow"
        />
        <button onClick={addTodo} className="bg-blue-500 text-white p-2 ml-2">
          Add Todo
        </button>
      </div>
      <ul>
        {todos.map((todo) => (
          <li key={todo._id} className="flex items-center mb-2">
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={(e) => updateTodo(todo._id, e.target.checked)}
              className="mr-2"
            />
            <span className={todo.completed ? 'line-through' : ''}>
              {todo.text}
            </span>
            <button
              onClick={() => deleteTodo(todo._id)}
              className="bg-red-500 text-white p-1 ml-auto"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
