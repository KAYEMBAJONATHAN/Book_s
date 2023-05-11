import React from 'react';

const NavBar = () => (
  <nav>
    <h1>Bookstore</h1>
    <ul className="navbar">
      <li>
        <a href="/">Books</a>
      </li>
      <li>
        <a href="/categories">Categories</a>
      </li>
    </ul>
  </nav>
);

export default NavBar;
