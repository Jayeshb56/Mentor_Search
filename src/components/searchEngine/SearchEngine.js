// SearchEngine.js
import React, { useState } from 'react';
import './SearchEngine.css';

const SearchEngine = () => {
  const [query, setQuery] = useState('');

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSearch = () => {
    // Perform search logic with the 'query' state
    console.log('Searching for:', query);
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={handleInputChange}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchEngine;
