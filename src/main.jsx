import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"; 
import { PizzaProvider } from "./context/PizzaContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PizzaProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PizzaProvider>
  </React.StrictMode>
);
