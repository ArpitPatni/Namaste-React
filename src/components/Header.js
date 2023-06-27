import React, { useState } from "react";
import { Link } from "react-router-dom";

function Title() {
  return (
    <a className="logo" href="/">
      Patni's Kitchen
    </a>
  );
}

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const loggedInUser = () => {
    return true;
  };
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/about">ABOUT</Link>
          </li>
          <li>
            <Link to="/contact">CONTACT</Link>
          </li>
          <li>CART</li>
        </ul>
      </div>
      {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(false)}>Logout</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      )}
    </div>
  );
};
export default Header;
