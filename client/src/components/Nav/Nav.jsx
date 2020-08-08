import React from "react";
import "./Nav.css";
import { NavLink } from "react-router-dom";
import { Navbar, NavItem } from "react-materialize";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Nav = () => {
  return (
    <Navbar
      alignLinks="right"
      brand={
        <NavLink to="/" className="brand-logo">
          Ripping Recipes
        </NavLink>
      }
      menuIcon={<FontAwesomeIcon icon={faBars}>Menu</FontAwesomeIcon>}
      id="mobile-nav"
      options={{
        draggable: true,
        edge: "right",
        inDuration: 250,
        onCloseEnd: null,
        onCloseStart: null,
        onOpenEnd: null,
        onOpenStart: null,
        outDuration: 200,
        preventScrolling: true,
      }}
    >
      <NavItem href="/recipes">Recipes</NavItem>
      <NavItem href="/ingredients">Ingredients</NavItem>
    </Navbar>
  );
};

export default Nav;
