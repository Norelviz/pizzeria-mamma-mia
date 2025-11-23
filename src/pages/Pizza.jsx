import { useParams } from "react-router-dom";
import { useContext } from "react";
import { PizzaContext } from "../context/PizzaContext";

const Pizza = () => {
  const { id } = useParams();
  const { pizzas } = useContext(PizzaContext);

  // Buscar pizza por su id (napo, espa, etc.)
  const pizza = pizzas.find((p) => p.id === id);

  if (!pizza) {
    return <h2 className="text-center mt-5">Pizza no encontrada 😢</h2>;
  }

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">{pizza.name}</h2>

      <img
        src={pizza.img}
        alt={pizza.name}
        className="img-fluid mb-4"
        style={{ maxWidth: "600px", borderRadius: "10px" }}
      />

      <h4>Ingredientes:</h4>
      <ul>
        {pizza.ingredients.map((ing, index) => (
          <li key={index}>🍕 {ing}</li>
        ))}
      </ul>

      <h3 className="mt-4">
        Precio: ${pizza.price.toLocaleString("es-CL")}
      </h3>
    </div>
  );
};

export default Pizza;
