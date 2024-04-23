import React from "react";
import ReactDOM from "react-dom/client";
import App from "./routes/App.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import Home from "./components/Home.jsx";
import CompanyProfile from "./components/CompanyProfile.jsx";
import Contact from "./components/Contact.jsx";
import ViewProduct from "./components/ViewProduct.jsx";
import Cart from "./components/Cart.jsx";

const router = createBrowserRouter([
  { 
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      { path: "/company-profile", 
        element: <CompanyProfile /> 
      },
      { path: "/contact", 
        element: <Contact/> 
      },

      { path: "/cart", 
        element: <Cart/> 
      },

      { path: "/product/:productId", 
        element: <ViewProduct/> 
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
