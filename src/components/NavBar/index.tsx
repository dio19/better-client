import React from "react";
import { NavLink } from "react-router-dom";
import "./index.scss";

const NavBar = () => {
  return (
    <nav className="navbar">
      <NavLink
        className="navbar__title"
        to="/"
        children={<h1>Customers App</h1>}
      ></NavLink>
      <ul className="navbar__list">
        <NavLink
          to="/"
          children={
            <li className="navbar__list-item">
              <div className="navbar__list-item-link">Home</div>
            </li>
          }
        ></NavLink>
        <NavLink
          to="/customers"
          children={
            <li className="navbar__list-item">
              <div className="navbar__list-item-link">List</div>
            </li>
          }
        ></NavLink>
        <NavLink
          to="/add-customer"
          children={
            <li className="navbar__list-item">
              <div className="navbar__list-item-link">Add</div>
            </li>
          }
        ></NavLink>
        <NavLink
          to="/update-or-delete"
          children={
            <li className="navbar__list-item">
              <div className="navbar__list-item-link">Update</div>
            </li>
          }
        ></NavLink>
      </ul>
    </nav>
  );
};

export default NavBar;
