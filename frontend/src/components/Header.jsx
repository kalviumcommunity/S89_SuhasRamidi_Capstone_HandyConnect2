import React from 'react';

const Header = () => {
  return (
    <header>
      <h1>Welcome to HandyConnect</h1>
      <nav>
        <ul className="nav-menu">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
