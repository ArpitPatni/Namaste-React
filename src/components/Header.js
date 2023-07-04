import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import userContext from "../utils/userContext";
import { useSelector } from "react-redux";

function Title() {
  return (
    <a className="logo ml-4" href="/">
      Patni's Kitchen
    </a>
  );
}

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { user } = useContext(userContext);
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div className=" flex justify-between h-14 items-center bg-amber-500 ">
      <Title className="hover:text-white" />
      <div>
        <ul className="flex">
          <li className="px-4 hover:text-white">
            <Link to="/">HOME</Link>
          </li>
          <li className="px-4 hover:text-white">
            <Link to="/about">ABOUT</Link>
          </li>
          <li className="px-4 hover:text-white">
            <Link to="/contact">CONTACT</Link>
          </li>
          <li className="px-4 hover:text-white">
            <Link to="/instamart">INSTAMART</Link>
          </li>
          <li className="px-4 hover:text-white">
            <Link to="/cart">
              CART <strong>{cartItems.length}</strong>
            </Link>
          </li>
        </ul>
      </div>
      {isLoggedIn ? (
        <button
          className="hover:text-white mr-5"
          onClick={() => setIsLoggedIn(false)}
        >
          Logout
        </button>
      ) : (
        <button
          className="hover:text-white mr-5"
          onClick={() => setIsLoggedIn(true)}
        >
          Login
        </button>
      )}
    </div>
  );
};
export default Header;
