import React from "react";
import logo from "../images/logo2.png";
import "./Navigation.css";
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <div className="nav">
      <img id="logo" src={logo} />
      <br />
      <span className="menu_all">
        <span className="menu">
          <NavLink to="/about" activeClassName="now">
            About
          </NavLink>
        </span>
        <span className="menu">
          <NavLink exact to="/" activeClassName="now">
            Store
          </NavLink>
        </span>
        <span className="menu">
          <NavLink to="/contact" activeClassName="now">
            Contact
          </NavLink>
        </span>
        <span className="menu">
          <NavLink to="/news" activeClassName="now">
            News
          </NavLink>
        </span>
      </span>
    </div>
  );
}

export default Navigation;
