import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../images/logo.svg";
const Nav = () => {
  return (
    <div className="nav">
      <Logo className="logo" />
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
