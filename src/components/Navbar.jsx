import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Navbar = () => {
  const { total } = useCart();

  return (
    <nav className="navbar navbar-expand bg-dark navbar-dark sticky-top">
      <div className="container d-flex justify-content-between align-items-center">

        {/* Branding */}
        <Link to="/" className="navbar-brand">
          🍕 Pizzería Mamma Mía
        </Link>

        {/* Navegación */}
        <div className="d-flex gap-2">
          <Link to="/" className="btn btn-outline-light btn-sm">
            🍕 Home
          </Link>

          <Link to="/login" className="btn btn-outline-light btn-sm">
            🔐 Login
          </Link>

          <Link to="/register" className="btn btn-outline-light btn-sm">
            🧾 Register
          </Link>

          <Link to="/profile" className="btn btn-outline-light btn-sm">
            👤 Profile
          </Link>

          {/* Carrito */}
          <Link to="/cart" className="btn btn-success btn-sm ms-2">
            🛒 Total: ${total.toLocaleString("es-CL")}
          </Link>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
