import { formatPrice } from '../utils/format';

const CardPizza = ({ name, price, ingredients, img }) => {
  return (
    <div className="card h-100 shadow-sm">
      <img src={img} className="card-img-top" alt={name} />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{name}</h5>

        <p className="mb-1 text-muted">Ingredientes:</p>
        <ul className="ps-3" style={{ fontSize: '0.95rem' }}>
          {ingredients.map((ing, i) => (
            <li key={i}>{ing}</li>
          ))}
        </ul>

        <div className="mt-auto d-flex justify-content-between align-items-center">
          <span className="fw-bold fs-5">${formatPrice(price)}</span>
          <div className="d-flex gap-2">
            <button className="btn btn-outline-primary">Ver más</button>
            <button className="btn btn-primary">Añadir</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardPizza;
