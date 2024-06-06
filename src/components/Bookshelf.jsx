// made by @Ashish-CodeJourney 

import React, { useState, useEffect } from 'react';

const Bookshelf = () => {
  const [bookshelf, setBookshelf] = useState([]);

  useEffect(() => {
    const storedBooks = JSON.parse(localStorage.getItem('bookshelf')) || [];
    setBookshelf(storedBooks);
  }, []);

  const removeBookFromShelf = (bookToRemove) => {
    const updatedBooks = bookshelf.filter((book) => book.key !== bookToRemove.key);
    setBookshelf(updatedBooks);
    localStorage.setItem('bookshelf', JSON.stringify(updatedBooks));
  };

  return (
    <div className="container">
      <h2>My Bookshelf</h2>
      <div className="bookshelf">
        {bookshelf.map((book, index) => (
          <div key={index} className="book-card">
            <h3>{book.title}</h3>
            <p>Author: {book.author_name?.join(', ')}</p>
            <button
              className="remove-button"
              onClick={() => removeBookFromShelf(book)}
            >
              Remove from Bookshelf
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bookshelf;
