import React, { useState } from "react";

import "./Navigation_mobile.css";
import { NavLink } from "react-router-dom";
import menu from "../images/navigation_menu.png";

function Navigation_mobile() {
  const [click, setClick] = useState(false);
  const closeMobileMenu = () => setClick(false);
  const handleClick = () => setClick(true);

  return (
    <div className="mobile_nav">
      {click ? (
        <div className="mobile_menu_opened_container">
          <div className="mobile_menu_all">
            <NavLink to="/about" activeClassName="now">
              <span className="mobile_menu" onClick={closeMobileMenu}>
                About
              </span>
            </NavLink>
            <hr size="2px" width="100%" color="#858585" />
            <NavLink exact to="/" activeClassName="now">
              <span className="mobile_menu" onClick={closeMobileMenu}>
                Store
              </span>
            </NavLink>
            <hr size="2px" width="100%" color="#858585" />
            <NavLink to="/contact" activeClassName="now">
              <span className="mobile_menu" onClick={closeMobileMenu}>
                Contact
              </span>
            </NavLink>
            <hr size="2px" width="100%" color="#858585" />
            <NavLink to="/news" activeClassName="now">
              <span className="mobile_menu" onClick={closeMobileMenu}>
                News
                <hr size="2px" width="100%" color="#858585" />
              </span>
            </NavLink>
          </div>
          <div className="mobile_menu_behind" onClick={closeMobileMenu}></div>
        </div>
      ) : (
        <div className="mobile_nav_button" onClick={handleClick}>
          <img src={menu} />{" "}
        </div>
      )}
    </div>
  );
}

export default Navigation_mobile;
