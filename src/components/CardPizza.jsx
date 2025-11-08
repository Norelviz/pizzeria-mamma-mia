import { useContext } from "react";
import { PizzaContext } from "../context/PizzaContext";

const CardPizza = ({ pizza }) => {
  const { addToCart } = useContext(PizzaContext);

  return (
    <div className="card shadow-sm text-center" style={{ width: "20rem" }}>
      <img
        src={pizza.img}
        alt={pizza.name}
        className="card-img-top"
        style={{ height: "220px", objectFit: "cover" }}
      />
      <div className="card-body">
        <h5 className="card-title fw-bold">{pizza.name}</h5>
        <p className="text-muted mb-1">Ingredientes:</p>
        <ul className="list-unstyled mb-3">
          {pizza.ingredients.map((ing, i) => (
            <li key={i}>🍕 {ing}</li>
          ))}
        </ul>
        <h5 className="fw-bold mb-3">${pizza.price.toLocaleString("es-CL")}</h5>
        <div className="d-flex justify-content-center gap-2">
          <button className="btn btn-outline-primary btn-sm">Ver más</button>
          <button className="btn btn-primary btn-sm" onClick={() => addToCart(pizza)}>
            Añadir
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardPizza;