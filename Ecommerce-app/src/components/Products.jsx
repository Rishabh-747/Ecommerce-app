import { Link } from "react-router-dom";

const Products = ({ product }) => {
  return (
    <Link to={`/product/${product.id}`} >
      <div className="rounded-lg border group mb-5 border-white hover:shadow-md transition duration-200 overflow-hidden hover:border-gray-300 ">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="bg-gray-100 group-hover:bg-white transition-all duration-200 rounded-lg object-contain w-full h-40 sm:h-48"
        />
        <div className="p-3">
          <h2 className="font-semibold line-clamp-2 text-sm sm:text-base">{product.title}</h2>
          <p className="font-bold mt-1 text-gray-800">$ {product.price}</p>
        </div>
      </div>
    </Link>
  );
};

export default Products;
