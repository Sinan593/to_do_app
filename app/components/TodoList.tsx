'use client';
import { useState } from 'react';


export type TodoItem = {
  id: number;
  text: string;
  completed: boolean;
};


interface TodoListProps {
  todos: TodoItem[];
  setTodos: React.Dispatch<React.SetStateAction<TodoItem[]>>;
}

const TodoList = ({ todos, setTodos }: TodoListProps) => {
  const [newTodo, setNewTodo] = useState('');
  const [isEditing, setIsEditing] = useState<null | number>(null);
  const [showSortOptions, setShowSortOptions] = useState(false);

  const addTodo = () => {
    if (newTodo.trim() === '') return;

    if (isEditing !== null) {
      setTodos(
        todos.map((todo) =>
          todo.id === isEditing ? { ...todo, text: newTodo } : todo
        )
      );
      setIsEditing(null);
    } else {
      const newTodoItem: TodoItem = {
        id: Date.now(),
        text: newTodo,
        completed: false,
      };
      setTodos([newTodoItem, ...todos]);
    }
    setNewTodo('');
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const clearAll = () => {
    setTodos([]);
  };

  const editTodo = (id: number, text: string) => {
    setIsEditing(id);
    setNewTodo(text);
  };

  const sortTodos = (order: 'alphabetical' | 'reverse-alphabetical' | 'recent' | 'earliest') => {
    let sortedTodos;
    if (order === 'alphabetical') {
      sortedTodos = [...todos].sort((a, b) => a.text.localeCompare(b.text));
    } else if (order === 'reverse-alphabetical') {
      sortedTodos = [...todos].sort((a, b) => b.text.localeCompare(a.text));
    } else if (order === 'recent') {
      sortedTodos = [...todos].sort((a, b) => b.id - a.id);
    } else {
      sortedTodos = [...todos].sort((a, b) => a.id - b.id);
    }
    setTodos(sortedTodos);
  };

  return (
    <div className="w-full max-w-md bg-white rounded-3xl shadow-lg p-12">
      <h1 className="text-3xl font-bold text-[#1E1B4B] text-left mb-8">Daily To Do List</h1>

      <div className="mb-8">
        <div className="relative flex items-center border border-gray-200 rounded-md overflow-hidden bg-gray-100">
          <input
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            placeholder="Add new list item"
            className="flex-1 px-4 py-3 pr-16 focus:outline-none text-black bg-gray-100 rounded-md focus:bg-white focus:border-blue-500"
          />
          <button
            onClick={addTodo}
            className="absolute right-1 top-1 bottom-1 px-4 bg-blue-500 text-white hover:bg-blue-600 transition-colors rounded-md"
          >
            {isEditing ? 'Update' : 'Add'}
          </button>
        </div>
      </div>

      {/* Sorting options */}
      <div className="relative mb-8">
        <button
          onClick={() => setShowSortOptions(!showSortOptions)}
          className="bg-gray-200 px-3 py-1 rounded-md text-gray-700 hover:bg-gray-300"
        >
          Sort: Recent
        </button>

        {showSortOptions && (
          <div className="absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-lg z-10">
            <button
              onClick={() => sortTodos('alphabetical')}
              className="block w-full px-4 py-2 text-left hover:bg-gray-100 text-black"
            >
              A-Z
            </button>
            <button
              onClick={() => sortTodos('reverse-alphabetical')}
              className="block w-full px-4 py-2 text-left hover:bg-gray-100 text-black"
            >
              Z-A
            </button>
            <button
              onClick={() => sortTodos('recent')}
              className="block w-full px-4 py-2 text-left hover:bg-gray-100 text-black"
            >
              Newest
            </button>
            <button
              onClick={() => sortTodos('earliest')}
              className="block w-full px-4 py-2 text-left hover:bg-gray-100 text-black"
            >
              Oldest
            </button>
          </div>
        )}
      </div>

      {/* Todo list */}
      <div className="space-y-4">
        {todos.map((todo) => (
          <div
            key={todo.id}
            className="flex items-center gap-4 p-2 rounded-lg transition-colors"
          >
            <button
              onClick={() => toggleTodo(todo.id)}
              className={`w-6 h-6 rounded-full border flex items-center justify-center ${todo.completed ? 'border-emerald-500 bg-emerald-500' : 'border-gray-300'} `}
            >
              {todo.completed && (
                <svg
                  className="w-4 h-4 text-white"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M5 13l4 4L19 7"></path>
                </svg>
              )}
            </button>
            <span
              className={`flex-1 transition-colors ${todo.completed ? 'text-gray-600 line-through' : 'text-black'} `}
              style={{ maxWidth: 'calc(100% - 50px)', overflowX: 'auto' }}
            >
              {todo.text}
            </span>
            <div className="flex gap-2">
              <button
                onClick={() => editTodo(todo.id, todo.text)}
                className="text-blue-500 hover:underline"
              >
                Edit
              </button>
              <button
                onClick={() => deleteTodo(todo.id)}
                className="text-red-500 hover:underline"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center mt-8 text-sm text-black">
        <span>{todos.length} items</span>
        <button
          onClick={clearAll}
          className="text-black hover:text-gray-700 transition-colors"
        >
          Clear All
        </button>
      </div>
    </div>
  );
};

export default TodoList;
