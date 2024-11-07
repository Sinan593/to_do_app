'use client';

import { useState, useEffect } from 'react';
import TodoList from './components/TodoList';

export default function Home() {
  const [todos, setTodos] = useState<{ id: number; text: string; completed: boolean }[]>([]);

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos') || '[]');
    setTodos(storedTodos);
  }, []); 

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]); 

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center items-start pt-16">
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}
