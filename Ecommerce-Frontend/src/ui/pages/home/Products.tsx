import { sampleProducts } from "../../../data";

const Products = () => {
  return (
    <div className="flex flex-row flex-wrap gap-5 bg-slate-300 mt-16 max-w-[80vw] mx-auto text-center justify-center align-middle ">
      {sampleProducts.map((product) => (
        <div key={product.slug} className=" flex flex-col bg-slate-500 p-5">
          <div className="">
            <img src={product.image} alt={product.name} height="200px" width='200px' className=" bg-red-500" />
            <h2 className=" font-bold">{product.name}</h2>
            <p>${product.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
