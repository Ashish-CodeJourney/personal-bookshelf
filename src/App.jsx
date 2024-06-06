// made by @Ashish-CodeJourney 

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import BookSearch from './components/BookSearch';
import Bookshelf from './components/Bookshelf';
import './App.css';

const App = () => {
  const addBookToShelf = (book) => {
    const existingBooks = JSON.parse(localStorage.getItem('bookshelf')) || [];
    existingBooks.push(book);
    localStorage.setItem('bookshelf', JSON.stringify(existingBooks));
  };

  return (
    <Router>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<BookSearch onAdd={addBookToShelf} />} />
          <Route path="/bookshelf" element={<Bookshelf />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
