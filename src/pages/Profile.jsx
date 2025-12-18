import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const { email, logout } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Mi Perfil</h1>

      <p>
        <strong>Email:</strong> {email}
      </p>

      <button
        style={{ marginTop: "1rem" }}
        className="btn btn-danger"
        onClick={handleLogout}
      >
        Cerrar Sesión
      </button>
    </div>
  );
};

export default Profile;
