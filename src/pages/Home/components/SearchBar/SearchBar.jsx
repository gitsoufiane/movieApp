import React from 'react';

function SearchBar({ value, onChange }) {
  return (
    <div className="flex items-center justify-center">
      <div className="w-3/4 m-5">
        <div className="relative flex flex-wrap items-stretch w-full mb-4 input-group">
          <input
            type="search"
            className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            placeholder="Search for a movie"
            value={value}
            onChange={onChange}
          />
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
