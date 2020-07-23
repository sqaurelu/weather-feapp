import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./navigation.css";

// Stateless component
const Navigation = () => {
  return (
    <ul className="navigation">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <NavLink to="/about" activeClassName="selected">
          About
        </NavLink>
      </li>
      <li>
        <NavLink to="/cities" activeClassName="selected">
          Cities
        </NavLink>
      </li>
    </ul>
  );
};

export default Navigation;
