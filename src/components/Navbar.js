import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
  return (
    <div className="navbar">
      <h1>Math Magicians</h1>
      <div>
        <Link to="/">Home </Link>
        <Link to="/calculator">Calculator </Link>
        <Link to="/quote">Quote </Link>
      </div>
    </div>
  );
}

export default Navbar;
