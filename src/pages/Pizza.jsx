import { useEffect, useState } from "react";

const Pizza = () => {
  const [pizza, setPizza] = useState(null);

  useEffect(() => {
    const getPizza = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/pizzas/p001");
        const data = await res.json();
        setPizza(data);
      } catch (error) {
        console.error("Error al cargar la pizza:", error);
      }
    };

    getPizza();
  }, []);

  if (!pizza) return <p className="text-center mt-5">Cargando pizza...</p>;

  return (
    <div className="container mt-4 d-flex justify-content-center">
      <div className="card shadow p-4" style={{ maxWidth: "600px" }}>
        <h2 className="text-center mb-3 fw-bold">{pizza.name}</h2>

        <img
          src={pizza.img}
          alt={pizza.name}
          className="img-fluid rounded mb-3"
        />

        <p className="text-muted">{pizza.desc}</p>

        <h5 className="fw-bold mt-3">Ingredientes:</h5>
        <ul>
          {pizza.ingredients.map((ing) => (
            <li key={ing}>🍕 {ing}</li>
          ))}
        </ul>

        <h3 className="text-center mt-4 fw-bold text-success">
          ${pizza.price.toLocaleString("es-CL")}
        </h3>

        <div className="text-center">
          <button className="btn btn-primary mt-3">Añadir al carrito</button>
        </div>
      </div>
    </div>
  );
};

export default Pizza;
