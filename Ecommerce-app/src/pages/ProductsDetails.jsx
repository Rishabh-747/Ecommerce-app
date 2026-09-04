import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { ProductContext } from "../context/ProductContext";
import { CartContext } from "../context/CartContext";
import { WishlistContext } from "../context/WishlistContext";

const ProductsDetails = () => {
  const { cart, addtoCart } = useContext(CartContext);
  const { products, loading, error } = useContext(ProductContext);
  const { id } = useParams();
  const { toggleWishlist, isInWishlist } = useContext(WishlistContext);

  if (loading) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <p className="text-xl font-semibold">Loading products...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <p className="text-xl font-semibold text-red-500">{error}</p>
      </div>
    );
  }

  const product = products.find((product) => product.id === Number(id));

  if (!product) {
    return <h1>Product not fonud. </h1>;
  }

  const isInCart = cart.some((item) => item.id === product.id);

  return (
    <div className="px-[5%] py-10">
      <div className="grid gap-10 max-w-350 justify-center m-auto grid-cols-2">
        {/* ===== Product Image ===== */}
        <div className="border flex justify-center p-3">
          <img src={product.thumbnail} alt={product.title} />
        </div>

        {/* ===== Product Content ===== */}
        <div className="border p-4">
          <h1 className="font-bold text-xl">{product.title} </h1>
          <p>
            rating : <span>{product.rating} ⭐</span>
          </p>
          <p>${product.price}</p>
          <p className="py-2">{product.description}</p>
          <p>
            Category : <span>{product.category}</span>
          </p>
          <p>
            Stock : <span>{product.stock}</span>
          </p>
          <p>
            Min. order : <span>{product.minimumOrderQuantity}</span>
          </p>
          <div className="grid grid-cols-3 text-center justify-between gap-5 p-4 border rounded-2xl my-2">
            <p>{product.returnPolicy}</p>
            <p>{product.shippingInformation}</p>
            <p>{product.warrantyInformation}</p>
          </div>
          <div className="flex justify-around">
            <div className="flex flex-col gap-1 w-[50%] justify-start items-center">
              <button
                onClick={() => addtoCart(product)}
                className="px-5 py-2 my-2 rounded-lg bg-yellow-400 font-bold text-white transition-transform duration-75 ease-out active:scale-95 active:bg-yellow-500 active:text-white hover:bg-white hover:text-yellow-400 border"
              >
                Add to Cart
              </button>
              {isInCart && (
                <Link
                  to="/user/cart"
                  className="px-4 py-2 rounded ml-2 bg-gray-100"
                >
                  Go to Cart
                </Link>
              )}
            </div>

            <div className="flex flex-col gap-2 w-[50%] justify-start py-3 items-center">
              <button
                type="button"
                onClick={() => toggleWishlist(product)}
                className="px-2"
              >
                {isInWishlist(product.id) ? "❤️" : "🤍"}
              </button>
              {isInWishlist(product.id) && (
                <Link
                  to="/wishlist"
                  className="px-4 py-2 rounded ml-2 bg-gray-100"
                >
                  Go to Wishlist
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsDetails;
