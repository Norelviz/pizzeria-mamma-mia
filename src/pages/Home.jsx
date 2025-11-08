import { useContext } from "react";
import { PizzaContext } from "../context/PizzaContext";
import CardPizza from "../components/CardPizza";

const Home = () => {
  const { pizzas } = useContext(PizzaContext);

  // 💡 Asegura que pizzas sea un array antes de usar .map()
  if (!Array.isArray(pizzas)) {
    return <div className="text-center mt-5">Cargando pizzas...</div>;
  }

  return (
    <div className="container my-4">
      <div className="row g-4">
        {pizzas.map((pizza) => (
          <div className="col-md-4" key={pizza.id}>
            <CardPizza pizza={pizza} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
