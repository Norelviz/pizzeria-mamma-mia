import { useContext } from "react";
import { PizzaContext } from "../context/PizzaContext";

const CartPage = () => {
  const { cart, setCart } = useContext(PizzaContext);


  const increase = (id) => {
    const updatedCart = cart.map((pizza) =>
      pizza.id === id ? { ...pizza, count: pizza.count + 1 } : pizza
    );
    setCart(updatedCart);
  };

 
  const decrease = (id) => {
    const updatedCart = cart
      .map((pizza) =>
        pizza.id === id ? { ...pizza, count: pizza.count - 1 } : pizza
      )
      .filter((pizza) => pizza.count > 0); // elimina pizzas con cantidad 0
    setCart(updatedCart);
  };


  const total = cart.reduce(
    (sum, pizza) => sum + pizza.price * pizza.count,
    0
  );

  return (
    <div className="container py-4">
      <h2 className="mb-4">🛒 Carrito de compras</h2>

      <div className="card p-4 shadow-sm">
        {cart.length === 0 ? (
          <p className="text-center text-muted">Tu carrito está vacío 🍕</p>
        ) : (
          cart.map((pizza) => (
            <div
              key={pizza.id}
              className="d-flex align-items-center justify-content-between border-bottom py-3"
            >
              <div className="d-flex align-items-center">
                <img
                  src={pizza.img}
                  alt={pizza.name}
                  width="80"
                  height="80"
                  className="rounded me-3"
                />
                <div>
                  <h5 className="mb-1">{pizza.name}</h5>
                  <p className="text-muted mb-0">
                    Precio unitario: $
                    {Number(pizza.price).toLocaleString("es-CL")}
                  </p>
                </div>
              </div>

              <div className="d-flex align-items-center gap-2">
                <button
                  className="btn btn-outline-danger btn-sm"
                  onClick={() => decrease(pizza.id)}
                >
                  -
                </button>
                <span className="fw-bold">{pizza.count}</span>
                <button
                  className="btn btn-outline-success btn-sm"
                  onClick={() => increase(pizza.id)}
                >
                  +
                </button>
                <h5 className="mb-0 ms-3">
                  $
                  {(pizza.price * pizza.count).toLocaleString("es-CL")}
                </h5>
              </div>
            </div>
          ))
        )}

        <div className="d-flex justify-content-end mt-4">
          <h4>
            Total a pagar: ${total.toLocaleString("es-CL")}
          </h4>
        </div>

        {cart.length > 0 && (
          <div className="text-end mt-3">
            <button className="btn btn-success">Pagar</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
