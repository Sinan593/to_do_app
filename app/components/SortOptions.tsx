import React from 'react';

interface SortOptionsProps {
  sortOrder: 'alphabetical' | 'reverse-alphabetical' | 'recent' | 'earliest';
  setShowSortOptions: React.Dispatch<React.SetStateAction<boolean>>;
  showSortOptions: boolean;
  sortTodos: (order: 'alphabetical' | 'reverse-alphabetical' | 'recent' | 'earliest') => void;
}


//creating four types of sort options
const SortOptions: React.FC<SortOptionsProps> = ({
  sortOrder,
  setShowSortOptions,
  showSortOptions,
  sortTodos,
}) => (
  <div className="relative mb-8">
    <button
      onClick={() => setShowSortOptions(!showSortOptions)}
      className="bg-gray-200 px-3 py-1 rounded-md text-gray-700 hover:bg-gray-300"
    >
      Sort: {sortOrder.replace(/-/g, ' ')}
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
);

export default SortOptions;
