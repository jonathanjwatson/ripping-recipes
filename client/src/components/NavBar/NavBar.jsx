import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <div className="nav-wrapper">
        <Link to="/" className="brand-logo">
          Ripping Recipes
        </Link>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <Link to="/recipes">Recipes</Link>
          </li>
          <li>
            <Link to="/ingredients">Inredients</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
