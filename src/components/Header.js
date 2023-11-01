import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  return (
    <div className="bg-gray-700 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <a href="/">
            <img
              className="h-16 p-2"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgCXt0uPHIHAxe0TK5gqBSF310x6lnbcWZRg&usqp=CAU"
              alt="logo"
            />
          </a>
        </div>
        <div className="flex items-center space-x-4">
          <ul className="flex space-x-4">
            <li>
              <Link to="/" className="hover:text-gray-400">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-gray-400">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-gray-400">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/instamart" className="hover:text-gray-400">
                Instamart
              </Link>
            </li>

            <li className="hover:text-gray-400">
              <Link to="/cart" className="hover:text-gray-400">
                Cart {cartItems.length}items{" "}
              </Link>
            </li>
          </ul>
          <button
            className="px-4 py-2 bg-orange-600 text-white rounded hover:bg-orange-500"
            onClick={() => setIsLoggedIn(!isLoggedIn)}
          >
            {isLoggedIn ? "Logout" : "Login"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
