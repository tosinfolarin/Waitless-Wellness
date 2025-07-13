import React from 'react';

export const Navbar: React.FC = () => {
  return (
    <header className="navbar">
      <nav>
        <ul className="navbar-links">
          <li><a href="/">Home</a></li>
          <li><a href="/symptoms">Symptoms</a></li>
          <li><a href="/faqs">FAQs</a></li>
          <li><a href="/login">Login</a></li>
        </ul>
      </nav>
    </header>
  );
};
