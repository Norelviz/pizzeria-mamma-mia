import { useEffect, useState } from "react";
import CardPizza from "../components/CardPizza";

const Home = () => {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    const loadPizzas = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/pizzas");
        const data = await res.json();
        setPizzas(data);
      } catch (error) {
        console.error("Error cargando pizzas", error);
      }
    };

    loadPizzas();
  }, []);

  return (
    <div className="home">
      <h2>Nuestras pizzas</h2>

      <div className="pizzas-container">
        {pizzas.map((p) => (
          <CardPizza key={p.id} pizza={p} />
        ))}
      </div>
    </div>
  );
};

export default Home;
