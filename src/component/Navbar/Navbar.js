import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            {" "}
            <Link to="/">Home</Link>
          </li>
          <li>
            {" "}
            <Link to="/reviews">Reviews</Link>
          </li>
          <li>
            {" "}
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            {" "}
            <Link to="/blogs">Blogs</Link>
          </li>
          <li>
            {" "}
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
