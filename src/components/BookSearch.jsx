// made by @Ashish-CodeJourney 

import React, { useState } from 'react';
import axios from 'axios';
import BookCard from './BookCard';

const BookSearch = ({ onAdd }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (e) => {
    setQuery(e.target.value);
    if (e.target.value) {
      setLoading(true);
      const response = await axios.get(`https://openlibrary.org/search.json?q=${e.target.value}&limit=10&page=1`);
      setResults(response.data.docs);
      setLoading(false);
    } else {
      setResults([]);
    }
  };

  return (
    <div className="container">
      <input type="text" value={query} onChange={handleSearch} placeholder="Search for books" />
      {loading ? (
        <div className="loading">
          <div></div>
          <div></div>
          <div></div>
        </div>
      ) : (
        <div className="results">
          {results.map((book) => (
            <BookCard key={book.key} book={book} onAdd={onAdd} />
          ))}
        </div>
      )}
    </div>
  );
};

export default BookSearch;
