// src/components/Navbar.jsx
import { useContext } from "react";
import { Link } from "react-router-dom";
import { PizzaContext } from "../context/PizzaContext";

const Navbar = () => {
  const { total } = useContext(PizzaContext);

  return (
    <nav className="navbar navbar-expand bg-dark navbar-dark sticky-top">
      <div className="container">
        <Link to="/" className="navbar-brand">🍕 Pizzería Mamma Mía</Link>

        <div className="d-flex gap-2">
          <Link to="/" className="btn btn-outline-light btn-sm">🍕 Home</Link>
          <Link to="/login" className="btn btn-outline-light btn-sm">🔐 Login</Link>
          <Link to="/register" className="btn btn-outline-light btn-sm">🧾 Register</Link>

          <Link to="/cart" className="btn btn-success btn-sm ms-2">
            Total: ${Number(total || 0).toLocaleString("es-CL")}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
