import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import "@fontsource/instrument-sans";

import App from "./App.jsx";
import NotFound from "./pages/NotFound.jsx";
import Home from "./pages/Home.jsx";
import Register from "./pages/Register.jsx";
import Login from "./pages/Login.jsx";
import Shop from "./pages/Shop.jsx";
import Wishlist from "./pages/Wishlist.jsx";
import Cart from "./pages/Cart.jsx";
import Category from "./pages/Category.jsx";
import Products from "./components/Products.jsx";
import ProductsDetails from "./pages/ProductsDetails.jsx";

import CartProvider from "./context/CartContext.jsx";
import { ProductProvider } from "./context/ProductContext.jsx";
import WishlistProvider from "./context/WishlistContext.jsx";
import Checkout from "./pages/Checkout.jsx";
import OrderSuccess from "./pages/OrderSuccess.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // Acts as the layout wrapper
    errorElement: <NotFound />, // Renders on 404s or app crashes
    children: [
      {
        index: true, // Default view for the "/" path
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "user/cart",
        element: <Cart />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "sign-up/register",
        element: <Register />,
      },
      {
        path: "product/:id",
        element: <ProductsDetails />,
      },
      {
        path: "shop",
        element: <Shop />,
      },
      {
        path: "category/:category",
        element: <Category />,
      },
      {
        path: "wishlist",
        element: <Wishlist />,
      },
      {
        path: "checkout",
        element: <Checkout />,
      },
      {
        path: "order-success",
        element: <OrderSuccess />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ProductProvider>
      <CartProvider>
        <WishlistProvider>
        <RouterProvider router={router} />
        </WishlistProvider>
      </CartProvider>
    </ProductProvider>
  </React.StrictMode>,
);
