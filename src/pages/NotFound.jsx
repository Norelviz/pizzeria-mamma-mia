import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div style={{ textAlign: "center", padding: "4rem" }}>
      <h1 style={{ fontSize: "3rem" }}>❌ 404</h1>
      <h2>Página no encontrada</h2>
      <p>Lo sentimos, esta ruta no existe.</p>

      <Link
        to="/"
        style={{
          marginTop: "1rem",
          display: "inline-block",
          padding: "10px 20px",
          background: "#ff4b4b",
          color: "white",
          borderRadius: "8px",
          textDecoration: "none",
        }}
      >
        ⬅ Volver al inicio
      </Link>
    </div>
  );
}
