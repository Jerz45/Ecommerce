import { useState } from "react";
import SignUpForm from "./SignUpForm";
import { AiOutlineClose } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [showSignupForm, setShowSignupForm] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(true);

  const handleCloseLoginForm = () => {
   
    navigate("/Home");
    
  };
  const navigate = useNavigate();

  const hanldleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  const handleSignUpClick = () => {
    setShowSignupForm(true);
    setShowLoginForm(false);
  };
 

  return (
    <>
      {showLoginForm && (
        <div
          className="flex items-center justify-center h-screen"
          style={{
            border: "1px solid red",
            height: "100vh",
            zIndex: 1,
          }}
        >
          <form
            onSubmit={hanldleSubmit}
            className="bg-white w-80 h-80 border-2 border-gray-400 rounded-md mt-1 p-4 relative"
          >
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
              onClick={handleCloseLoginForm}
            >
              <AiOutlineClose />
            </button>
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
        </div>
      )}

      {showSignupForm && <SignUpForm />}
    </>
  );
};

export default LoginForm;
