// made by @Ashish-CodeJourney 

import React, { useState } from 'react';

const BookCard = ({ book, onAdd }) => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
    onAdd(book);
    setTimeout(() => setClicked(false), 400);
  };

  return (
    <div className="book-card">
      <h3>{book.title}</h3>
      <p>Author: {book.author_name?.join(', ')}</p>
      <button
        onClick={handleClick}
        className={`add-button ${clicked ? 'button-clicked' : ''}`}
      >
        Add to Bookshelf
      </button>
    </div>
  );
};

export default BookCard;
