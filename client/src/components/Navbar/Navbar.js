import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../context/auth/authContext";
import "./Navbar.css";

const Navbar = () => {
  const authContext = useContext(AuthContext);

  const { isAuthenticated, logout, user } = authContext;

  const onLogout = () => {
    logout();
  };

  const authLinks = (
    <div className="navbar">
      <nav>
        <div className="logo">Q</div>
        <div className="nav-wrapper">
          <ul className="menu-area">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Academics">Academics</Link>
            </li>
            <li>
              <Link to="/Programming">Programming</Link>
            </li>
            <li>
              <Link to="/Ask">Ask</Link>
            </li>

            <li>
              <Link to="/qna">QNA</Link>
            </li>
            <a
              className="logout"
              onClick={onLogout}
              href="#!"
              style={{
                color: "white",
              }}
            >
              <i className="fas fa-sign-out-alt"></i> <span>Logout</span>
            </a>
          </ul>
        </div>
      </nav>
    </div>
  );

  const guestLinks = (
    <div className="navbar">
      <nav>
        <div className="logo">Q</div>
        <div className="nav-wrapper">
          <ul className="menu-area">
            <li>
              <Link to="/login">login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );

  return (
    <div className="navbar bg-primary">
      <ul>{isAuthenticated ? authLinks : guestLinks}</ul>
    </div>
  );
};

export default Navbar;
