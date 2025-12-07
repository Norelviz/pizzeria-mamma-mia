import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { UserContext } from "../context/UserContext";
import { formatPrice } from "../utils/format";

const Navbar = () => {
  const { total } = useContext(CartContext);
  const { token, logout } = useContext(UserContext);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
      <div className="container">
        <Link className="navbar-brand" to="/">
          🍕 Pizzería Mamma Mía
        </Link>

        <div className="d-flex gap-2 ms-auto">
        
          <Link to="/" className="btn btn-outline-light btn-sm">
            🏠 Home
          </Link>

          
          {token ? (
            <>
              <Link to="/profile" className="btn btn-outline-light btn-sm">
                👤 Profile
              </Link>

              <button
                type="button"
                className="btn btn-warning btn-sm"
                onClick={logout}
              >
                Logout
              </button>
            </>
          ) : (
            
            <>
              <Link to="/login" className="btn btn-outline-light btn-sm">
                🔐 Login
              </Link>
              <Link to="/register" className="btn btn-outline-light btn-sm">
                🧾 Register
              </Link>
            </>
          )}

          
          <Link to="/cart" className="btn btn-success btn-sm">
            Total: {formatPrice(total || 0)}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
