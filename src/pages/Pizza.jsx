import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";
import { PizzaContext } from "../context/PizzaContext";
import { formatPrice } from "../utils/format";

const Pizza = () => {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
  const { pizzas } = useContext(PizzaContext);

  const [pizza, setPizza] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPizza = async () => {
      try {
        setLoading(true);
        setError(null);

        o
        const res = await fetch(`/api/pizzas/${id}`);

        if (!res.ok) {
          throw new Error("No se pudo obtener la pizza desde la API");
        }

        const data = await res.json();
        setPizza(data);
      } catch (err) {
        console.error("Error con la API, usando contexto como respaldo:", err);

        
        const pizzaFromContext = pizzas.find((p) => p.id === id);

        if (pizzaFromContext) {
          setPizza(pizzaFromContext);
          setError(null);
        } else {
          setError("No se encontró la pizza.");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchPizza();
  }, [id, pizzas]);

  if (loading) {
    return (
      <div className="container my-5">
        <h2 className="text-center">Cargando pizza...</h2>
      </div>
    );
  }

  if (error || !pizza) {
    return (
      <div className="container my-5">
        <h2 className="text-center text-danger">
          Error al cargar la pizza. Intenta nuevamente más tarde.
        </h2>
      </div>
    );
  }

  return (
    <div className="container my-5">
      <div className="row g-4">
        <div className="col-md-6">
          <img
            src={pizza.img}
            alt={pizza.name}
            className="img-fluid rounded"
          />
        </div>

        <div className="col-md-6">
          <h2>{pizza.name}</h2>

          <p className="fw-semibold mt-3">Ingredientes:</p>
          <ul className="list-unstyled">
            {pizza.ingredients.map((ing) => (
              <li key={ing}>🍕 {ing}</li>
            ))}
          </ul>

          <h3 className="mt-4 mb-3">{formatPrice(pizza.price)}</h3>

          <button
            className="btn btn-primary"
            onClick={() => addToCart(pizza)}
          >
            Añadir al carrito
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pizza;
