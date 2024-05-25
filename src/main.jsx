import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import MainLayout from "./Layout/MainLayout";
import Home from "./component/Home";
import Cart from "./component/Cart"
import CartProvider from "./context/CartContext";
import Productlist from "./component/Productlist";
import Productview from "./component/Productview";
import FoodGallery from "./component/FoodGallery";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    children: [

      {
        path: "/",
      element: <Home/>,
      },
      {
        path:"/product",
        element: <Productlist/>
      },
      {
        path:"/product/:id",
        element: <Productview/>
      },
      {
        path:"/gallery",
        element: <FoodGallery/>
      },
      {
        path:"/cart",
        element:<Cart/>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CartProvider><RouterProvider router={router} /></CartProvider>
    
  </React.StrictMode>
);