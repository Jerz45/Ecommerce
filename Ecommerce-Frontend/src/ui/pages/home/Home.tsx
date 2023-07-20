import Footer from "../../molecules/Footer";
import NavBar from "../../molecules/NavBar";

const Home = () => {
  return (
    <div className="bg-gray-200">
      <div>
        <NavBar />
      </div>
      This is home page.
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
