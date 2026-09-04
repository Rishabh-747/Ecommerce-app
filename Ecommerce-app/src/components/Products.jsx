import { Link } from "react-router-dom";

const Products = ({ product }) => {
  return (
    <Link to={`/product/${product.id}`} >
      <div className="rounded-lg border group mb-5 border-white hover:border-gray-300 ">
        <img
          src={product.thumbnail}
          alt="product image"
          className="bg-gray-200 group-hover:bg-white transition-all duration-200 rounded-lg"
        />
        <div className="p-2">
          <h2>{product.title}</h2>
          <p>$ {product.price}</p>
        </div>
      </div>
    </Link>
  );
};

export default Products;
