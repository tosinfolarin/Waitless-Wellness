import { Link } from 'react-router-dom';
import naming from '../Naming.json';

export const Navbar: React.FC = () => {
  return (
    <header className="navbar">
      <nav>
        <ul className="navbar-links">
          <li><Link to="/">{naming.navbar.Homepage}</Link></li>
          <li><Link to="/symptoms">{naming.navbar.Symptoms}</Link></li>
          <li><Link to="/faqs">{naming.navbar.FAQPage}</Link></li>
          <li><Link to="/closestClinics">{naming.navbar.NearestClinics}</Link></li>
          <li><Link to="/signup">{naming.navbar.Signup}</Link></li>
          <li><Link to="/login">{naming.navbar.Login}</Link></li>
        </ul>
      </nav>
    </header>
  );
};
