import Footer from "../../molecules/Footer";
import NavBar from "../../molecules/NavBar";
// import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
import LoginForm from "./LoginForm";

const Home = () => {
  return (
    <div className="bg-gray-200">
      <NavBar />

      {/* <SignUpForm /> */}

      <div>
        <LoginForm />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
