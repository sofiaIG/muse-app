import "./Header.css";
import React from "react";
import HeaderLinks from "./HeaderLinks";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <NavLink to="" className="museLogo link">
          <span className="museLogo__lines">
              <span className="museLogo__line "  style={{height: "30%"}} />
              <span className="museLogo__line "  style={{height: "55%"}} />
              <span className="museLogo__line " style={{height: "100%"}} />
              <span className="museLogo__line "  style={{height: "80%"}} />
              <span className="museLogo__line "  style={{height: "50%"}} />
          </span>
    <strong>muse</strong>
    </NavLink>
    <HeaderLinks/>
    </header>
  );
};

export default Header;