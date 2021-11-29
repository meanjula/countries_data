import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className="nav">
      <h2>logo</h2>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/Countrieslist">Countries</NavLink>
          <NavLink to="/about">About</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
