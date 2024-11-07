import React from 'react';

interface TodoInputProps {
  newTodo: string;
  setNewTodo: React.Dispatch<React.SetStateAction<string>>;
  addTodo: () => void;
  isEditing: null | number;
}


//creating input box and function of editing
const TodoInput: React.FC<TodoInputProps> = ({ newTodo, setNewTodo, addTodo, isEditing }) => (
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
);

export default TodoInput;
