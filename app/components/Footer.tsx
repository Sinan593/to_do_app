import React from 'react';

interface FooterProps {
  todos: { id: number }[];
  clearAll: () => void;
}
//creating footer contents
const Footer: React.FC<FooterProps> = ({ todos, clearAll }) => (
  <div className="mt-4 flex items-center justify-between">
    <span className="text-gray-500">{todos.length} items</span>
    <button
      onClick={clearAll}
      className="text-red-500 hover:text-red-700 transition-colors"
    >
      Clear All
    </button>
  </div>
);

export default Footer;
