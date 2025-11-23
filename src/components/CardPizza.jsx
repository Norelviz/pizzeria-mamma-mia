import { Link } from "react-router-dom";
import { useContext } from "react";
import { PizzaContext } from "../context/PizzaContext";

const CardPizza = ({ pizza }) => {
  const { addToCart } = useContext(PizzaContext);

  return (
    <div className="card mb-4 shadow-sm" style={{ width: "22rem" }}>
      <img
        src={pizza.img}
        alt={pizza.name}
        className="card-img-top"
        style={{ height: "260px", objectFit: "cover" }}
      />

      <div className="card-body">
        <h5 className="card-title text-center">{pizza.name}</h5>

        <p className="text-start"><strong>Ingredientes:</strong></p>
        <ul className="text-start">
          {pizza.ingredients.map((ing, i) => (
            <li key={i}>🍕 {ing}</li>
          ))}
        </ul>

        <h4 className="text-center mt-3">${pizza.price.toLocaleString("es-CL")}</h4>

        <div className="d-flex justify-content-between mt-3">
          
          <Link to={`/pizza/${pizza.id}`} className="btn btn-outline-primary">
            Ver más
          </Link>

          <button
            className="btn btn-primary"
            onClick={() => addToCart(pizza)}
          >
            Añadir
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardPizza;
