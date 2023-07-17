import React, { useState } from "react";
import SignUpForm from "./SignUpForm"; // Import the SignUpForm component

const LoginForm = () => {
  const [showSignupForm, setShowSignupForm] = useState(false);

  const handleSignUpClick = () => {
    setShowSignupForm(true);
  };

  const handleSignupFormClose = () => {
    setShowSignupForm(false);
  };

  return (
    <div
      style={{
        border: "1px solid red",
        height: "100vh",
        zIndex: 1,
      }}
    >
      <form className="bg-white w-80 h-80 border-2 border-gray-400 rounded-md mt-1 p-4 mr-1 ml-auto">
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
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="password"
            placeholder="Password"
          />
        </div>
        <div className="flex-col items-center text-center">
          <button
            className="w-full bg-gray-400 hover:bg-gray-600 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Sign In
          </button>
          <br />
          <span className="text-gray-500">Or</span>
          <br />
          <button
            className="w-full bg-gray-400 hover:bg-gray-600 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={handleSignUpClick}
          >
            Sign Up
          </button>
        </div>
      </form>

      {showSignupForm && (
        <div
          style={{
            border: "1px solid green",
            height: "100vh",
            width: "100vw",
            position: "absolute",
            top: 0,
            bottom: 0,
            backdropFilter: ` blur(10px)`,
          }}
        >
          <div>
            {/* <div className="bg-white border-2 border-gray-400 rounded-md p-4"> */}
            <button className=" text-gray-600" onClick={handleSignupFormClose}>
              Close
            </button>
            {/* <h2 className="text-2xl font-bold mb-4">Sign Up</h2> */}
            {/* </div> */}
            <SignUpForm />
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginForm;
