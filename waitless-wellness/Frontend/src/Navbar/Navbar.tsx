import React from 'react';
import naming from "/Users/theoosinfolarin/Desktop/Waitless-Wellness/waitless-wellness/Frontend/src/Naming.json";


export const Navbar: React.FC = () => {
  return (
    <header className="navbar">
      <nav>
        <ul className="navbar-links">
          <li><a href="/">{naming.navbar.Homepage}</a></li>
          <li><a href="/symptoms">{naming.navbar.Symptoms}</a></li>
          <li><a href="/faqs">{naming.navbar.FAQPage}</a></li>
          <li><a href="/closestClinics">{naming.navbar.NearestClinics}</a></li> API to find phsyios
          <li><a href="/signup">{naming.navbar.Signup}</a></li>
          <li><a href="/login">{naming.navbar.Login}</a></li>
        </ul>
      </nav>
    </header>
  );
};
