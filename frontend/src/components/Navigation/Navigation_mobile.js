import React, { useState } from "react";

import "./Navigation_mobile.css";
import { NavLink } from "react-router-dom";

function Navigation_mobile() {
  const [click, setClick] = useState(false);
  const closeMobileMenu = () => setClick(false);
  const handleClick = () => setClick(true);

  return (
    <div className="mobile_nav">
      {click ? (
        <div className="mobile_menu_opened_container">
          <div className="mobile_menu_all">
            <span className="mobile_menu" onClick={closeMobileMenu}>
              <NavLink to="/about" activeClassName="now">
                About
              </NavLink>
            </span>
            <span className="mobile_menu" onClick={closeMobileMenu}>
              <NavLink exact to="/" activeClassName="now">
                Store
              </NavLink>
            </span>
            <span className="mobile_menu" onClick={closeMobileMenu}>
              <NavLink to="/contact" activeClassName="now">
                Contact
              </NavLink>
            </span>
            <span className="mobile_menu" onClick={closeMobileMenu}>
              <NavLink to="/news" activeClassName="now">
                News
              </NavLink>
            </span>
          </div>
          <div className="mobile_menu_behind" onClick={closeMobileMenu}></div>
        </div>
      ) : (
        <div className="mobile_nav_button" onClick={handleClick}>
          MENU
        </div>
      )}
    </div>
  );
}

export default Navigation_mobile;
