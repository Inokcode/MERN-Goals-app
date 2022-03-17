import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
      435
      <header className="header">
        <div className="logo">
          <Link to="/">GoalSetter</Link>
        </div>
        <ul>
          <li>
            <Link to="/login">
              <FaSignInAlt /> Login
            </Link>
          </li>
          <li></li>
          <li>
            <Link to="/register">
              <FaUser /> Register
            </Link>
          </li>
          <li></li>
        </ul>
      </header>
    </>
  );
}

export default Header;
