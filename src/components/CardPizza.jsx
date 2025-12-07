import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { formatPrice } from "../utils/format";

const CardPizza = ({ pizza }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="card h-100 shadow-sm">
      <img src={pizza.img} alt={pizza.name} className="card-img-top" />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title text-center">{pizza.name}</h5>

        <p className="fw-semibold">Ingredientes:</p>
        <ul className="list-unstyled flex-grow-1">
          {pizza.ingredients.map((ing) => (
            <li key={ing}>🍕 {ing}</li>
          ))}
        </ul>

        <h4 className="text-center mt-3 mb-3">
          {formatPrice(pizza.price)}
        </h4>

        <div className="d-flex justify-content-between">
          <Link
            to={`/pizza/${pizza.id}`}
            className="btn btn-outline-primary btn-sm"
          >
            Ver más
          </Link>

          <button
            className="btn btn-primary btn-sm"
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
