import React from 'react';
import '../Style/navbar.css';

const NavBar = () => (
  <nav className="head-nav">
    <ul className="navbar">
      <li className="head-link">Bookstore CMS</li>
      <li className="link">
        <a href="/">Books</a>
      </li>
      <li className="link">
        <a className="category" href="/categories">Categories</a>
      </li>
    </ul>
    <i className="fas fa-user user" />
  </nav>
);

export default NavBar;
