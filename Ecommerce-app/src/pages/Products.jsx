import { Link } from "react-router-dom";

const Products = ({ product }) => {
  return (
    <Link to={`/product/${product.id}`} >
      <div className="rounded-lg mb-5 ">
        <img
          src={product.thumbnail}
          alt="product image"
          className="bg-mauve-200  rounded-lg"
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
