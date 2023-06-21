import React from "react";

function Title() {
  return (
    <a className="logo" href="/">
      Patni's Kitchen
    </a>
  );
}

const Header = () => {
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>HOME</li>
          <li>ABOUT</li>
          <li>CONTACT</li>
          <li>CART</li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
