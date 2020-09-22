import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <nav>
        <div className="logo">Company Logo</div>
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
              <Link to="/Qna">QNA</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
