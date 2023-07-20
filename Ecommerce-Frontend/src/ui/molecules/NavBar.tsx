// import React from "react";
import { MdOutlineArrowDropDown, MdShoppingCart } from "react-icons/Md";
import { AiOutlineSearch } from "react-icons/ai";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="top-0 left-0 right-0 bg-gray-400 shadow-md">
      <div className="container mx-auto flex items-center justify-between h-16 px-4 sm:px-6">
        <div className="flex flex-row items-end gap-1">
          <Link to="/Home">
            <span className="text-white text-2xl font-semibold">Layus</span>
          </Link>

          <div className=" pl-20 flex items-center">
            <input
              className="h-9 border w-80 rounded-tl-xl rounded-bl-xl  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Search Products"
            />
            <button className="h-9 border rounded-tr-xl rounded-br-xl  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-400 hover:bg-gray-600 hover:text-gray-900">
              <AiOutlineSearch />
            </button>
          </div>
        </div>
        <div className="flex flex-row gap-12 items-center">
          <div>
            <Link
              to="/loginform"
              className="text-white hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
            >
              Sign In
            </Link>

            {/* <div className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg hidden">
              <ul className="py-1">
                <li>
                  <Link
                    to="/"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                  >
                    English
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                  >
                    Spanish
                  </Link>
                </li>
              
              </ul>
            </div> */}
          </div>
          <Link
            to="/Products"
            className="text-white hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
          >
            Products
          </Link>

          <Link
            to="/Cart"
            className="text-white hover:text-gray-900 px-3 py-2 rounded-md text-2xl"
          >
            <MdShoppingCart />
          </Link>
          {/* <div className="relative">
            <select className="border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
              <option value="en">English</option>
              <option value="es">Spanish</option>
              
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <MdOutlineArrowDropDown/>
              <svg className="h-2 w-2 fill-current" viewBox="0 0 20 20">
                <path
                  d="M7 7l3-3 3 3m0 6l-3 3-3-3"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
