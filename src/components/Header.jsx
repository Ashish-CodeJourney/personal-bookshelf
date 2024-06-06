// made by @Ashish-CodeJourney 

import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav>
        <Link to="/">Search Books</Link>
        <Link to="/bookshelf">My Bookshelf</Link>
      </nav>
    </header>
  );
};

export default Header;
