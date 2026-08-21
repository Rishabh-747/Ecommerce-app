import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css'
import App from './App.jsx'
import Cart from './pages/Cart.jsx'
import NotFound from './pages/NotFound.jsx'
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx';
import Products from './pages/Products.jsx'
// import ProductsDetails from './pages/ProductsDetails.jsx'

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
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
