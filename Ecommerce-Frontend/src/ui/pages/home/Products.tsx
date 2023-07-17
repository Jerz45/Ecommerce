import { sampleProducts } from "../../../data";
import Footer from "../../molecules/Footer";
import NavBar from "../../molecules/NavBar";

const Products = () => {
  return (
    <div>
      <NavBar />
      <div className="flex flex-row flex-wrap gap-5 mt-2 max-w-[80vw] mx-auto text-center justify-center align-middle ">
        {sampleProducts.map((product) => (
          <div
            key={product.slug}
            className=" flex flex-col border-2 border-gray-400 rounded-2xl p-5"
          >
            <div className="">
              <img
                src={product.image}
                alt={product.name}
                height="200px"
                width="200px"
              />
              <h2 className=" font-bold">{product.name}</h2>
              <p>${product.price}</p>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Products;
