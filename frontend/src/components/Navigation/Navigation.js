import React from "react";
import logo from "../images/logo.png";
import "./Navigation.css";
import { NavLink } from "react-router-dom";
import facebook from "../images/facebook-square-brands.svg";
import instagram from "../images/instagram-square-brands.svg";

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

        <div className="nav_icons">
          <a href="https://www.facebook.com/cmakgeolli">
            <img src={facebook} />{" "}
          </a>
          <a href="https://www.instagram.com/cmakgeolli">
            <img src={instagram} />{" "}
          </a>
        </div>
      </span>
    </div>
  );
}

export default Navigation;
