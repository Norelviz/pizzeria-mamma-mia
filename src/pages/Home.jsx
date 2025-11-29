import { useContext } from "react";
import CardPizza from "../components/CardPizza";
import { PizzaContext } from "../context/PizzaContext";
import { useCart } from "../context/CartContext";

const Home = () => {
  const { pizzas } = useContext(PizzaContext);
  const { addToCart } = useCart();

  return (
    <div className="home container mt-4">
      <h2 className="mb-4">Nuestras pizzas 🍕</h2>

      <div className="row">
        {pizzas.map((pizza) => (
          <div key={pizza.id} className="col-12 col-md-4 mb-4">
            <CardPizza pizza={pizza} addToCart={addToCart} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
