import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css'
import App from './App.jsx'
import NotFound from './pages/NotFound.jsx'
import Home from './pages/Home.jsx'
import Register from './pages/Register.jsx';
import Login from './pages/Login.jsx';
import Shop from './pages/Shop.jsx';
import Cart from './pages/Cart.jsx'
import Products from './pages/Products.jsx'
import ProductsDetails from './pages/ProductsDetails.jsx'
import { ProductProvider } from './context/ProductContext.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />, // Acts as the layout wrapper
    errorElement: <NotFound />, // Renders on 404s or app crashes
    children: [
      {
        index: true, // Default view for the "/" path
        element: <Home />,
      },
      {
        path: 'login', 
        element: <Login />,
      },
      {
        path: 'cart', 
        element: <Cart/>,
      },
      {
        path: 'products', 
        element: <Products/>,
      },
      {
        path: 'register', 
        element: <Register/>,
      },
      {
        path: 'product-deatils', 
        element: <ProductsDetails/>,
      },
      {
        path: 'shop', 
        element: <Shop/>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ProductProvider>
    <RouterProvider router={router} />
  </ProductProvider>
  </React.StrictMode>,
)
