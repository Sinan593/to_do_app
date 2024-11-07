import React from 'react';

interface TodoItemProps {
  todo: { id: number; text: string; completed: boolean };
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
  editTodo: (id: number, text: string) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, toggleTodo, deleteTodo, editTodo }) => (
  <div className="flex items-center gap-4 p-2 rounded-lg transition-colors">
    <button
      onClick={() => toggleTodo(todo.id)}
      className={`w-6 h-6 rounded-full border flex items-center justify-center ${todo.completed ? 'border-emerald-500 bg-emerald-500' : 'border-gray-300'}`}
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
          <path d="M5 13l4 4L19 7" />
        </svg>
      )}
    </button>
    <span
      className={`flex-1 text-black ${todo.completed ? 'text-gray-500 line-through hover:text-blue-500' : 'text-black hover:text-blue-500'} transition-colors`}
      style={{ maxWidth: 'calc(100% - 50px)', overflowX: 'auto', whiteSpace: 'nowrap' }}
    >
      {todo.text}
    </span>
    <button 
      onClick={() => editTodo(todo.id, todo.text)} 
      className="text-blue-500 hover:text-blue-700 transition-colors"
    >
      Edit
    </button>
    <button 
      onClick={() => deleteTodo(todo.id)} 
      className="text-red-500 hover:text-red-700 transition-colors"
    >
      Delete
    </button>
  </div>
);

export default TodoItem;
