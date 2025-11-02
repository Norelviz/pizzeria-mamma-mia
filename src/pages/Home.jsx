import Header from '../components/Header';
import CardPizza from '../components/CardPizza';
import { pizzas } from '../data/pizzasData';

const Home = () => {
  return (
    <>
      <Header />

      <main className="container my-5">
        <div className="row g-4">
          {pizzas.map((pizza, index) => (
            <div key={index} className="col-12 col-md-4">
              <CardPizza
                name={pizza.name}
                price={pizza.price}
                ingredients={pizza.ingredients}
                img={pizza.img}
              />
            </div>
          ))}
        </div>
      </main>
    </>
  );
};

export default Home;
