import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="nav">
      <h2>logo</h2>
      <ul>
        <li>
          <Link to="/">Home</Link>
          <Link to="/countries">Countries</Link>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
