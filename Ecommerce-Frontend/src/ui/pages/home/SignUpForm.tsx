import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
// import Home from "./Home";
import { useNavigate } from "react-router-dom";

const SignUpForm = () => {
  const [showSignForm, setShowSignForm] = useState(true);

  const navigate = useNavigate();
  const handleCloseSignForm = () => {
    setShowSignForm(false);
    navigate("/Home");
  };

  const hanldleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
 

  return (
    <div className="flex justify-center items-center">
      {showSignForm && (
        <div className="relative">
          <button
            className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
            onClick={handleCloseSignForm}
          >
            <AiOutlineClose />
          </button>
          <form
            onSubmit={hanldleSubmit}
            className="bg-white border-2 border-gray-400 rounded-md p-8"
          >
            <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Full Name
              </label>
              <div className="flex ">
                <input
                  className="shadow appearance-none border rounded-l w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="First Name"
                />
                <input
                  className="shadow appearance-none border rounded-r w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="Last Name"
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Email address
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="email"
                placeholder="Enter email"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Gender
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Gender"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Address
              </label>
              <div className="mb-2">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Street Address
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="Street Address"
                />
              </div>
              <div className="mb-2">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  City
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="City"
                />
              </div>
              <div className="mb-2">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  State/Province
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="State/Province"
                />
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Postal / Zip Code
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="Postal / Zip Code"
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Phone Number
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Phone Number"
              />
            </div>
            <button
              className="bg-gray-400 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Sign Up
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default SignUpForm;
