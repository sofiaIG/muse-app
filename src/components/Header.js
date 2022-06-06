import "./Header.css";
import React from "react";
import HeaderLinks from "./HeaderLinks";

const Header = () => {
  return (
    <header className="header">
      <span className="museLogo">
          <span className="museLogo__lines">
              <span className="museLogo__line "  style={{height: "30%"}} />
              <span className="museLogo__line "  style={{height: "60%"}} />
              <span className="museLogo__line " style={{height: "100%"}} />
              <span className="museLogo__line "  style={{height: "80%"}} />
              <span className="museLogo__line "  style={{height: "50%"}} />
          </span>
    <strong>muse</strong>
    </span>
    <HeaderLinks/>
    </header>
  );
};

export default Header;