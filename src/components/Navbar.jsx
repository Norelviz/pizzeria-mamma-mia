import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark px-4">
      <h4 className="text-white mb-0">🍕 Pizzería Mamma Mía</h4>
      <div>
        <Link to="/" className="btn btn-outline-light me-2">
          🍕 Home
        </Link>
        <Link to="/login" className="btn btn-outline-light me-2">
          🔐 Login
        </Link>
        <Link to="/register" className="btn btn-outline-light me-2">
          🪪 Register
        </Link>
        <button className="btn btn-success">🧾 Total: $25.000</button>
      </div>
    </nav>
  );
};

export default Navbar;

