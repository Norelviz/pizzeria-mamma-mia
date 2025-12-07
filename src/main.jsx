import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import { PizzaProvider } from "./context/PizzaContext";
import { CartProvider } from "./context/CartContext";
import { UserProvider } from "./context/UserContext"; 

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserProvider>           
      <PizzaProvider>
        <CartProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </CartProvider>
      </PizzaProvider>
    </UserProvider>
  </React.StrictMode>
);
