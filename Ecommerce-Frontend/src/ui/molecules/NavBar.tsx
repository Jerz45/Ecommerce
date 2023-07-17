// import React from "react";
import { MdShoppingCart } from "react-icons/Md";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="top-0 left-0 right-0  bg-gray-400 shadow-md">
      <div className="container mx-auto flex items-center justify-between h-16 px-4 sm:px-6">
        <div className="flex flex-row items-end gap-1">
          <Link to="/Home">
            {" "}
            <span className="text-white text-xl font-semibold">Layus</span>
          </Link>
        </div>
        <div className="flex flex-row gap-12">
          <Link
            to="/Home"
            className="text-white hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
          >
            Home
          </Link>

          <Link
            to="/Products"
            className="text-white hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
          >
            Products
          </Link>
          <Link
            to="/AboutUs"
            className="text-white hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
          >
            About Us
          </Link>
          <Link
            to="/Cart"
            className="text-white hover:text-gray-900 px-3 py-2 rounded-md text-2xl  "
          >
            <MdShoppingCart />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
