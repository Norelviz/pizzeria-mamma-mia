import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { UserContext } from "../context/UserContext";
import { formatPrice } from "../utils/format";

const CartPage = () => {
  const { cart, increment, decrement, total } = useContext(CartContext);
  const { token } = useContext(UserContext);

  if (cart.length === 0) {
    return (
      <div className="container my-5">
        <h2 className="mb-4">🛒 Carrito de compras</h2>
        <div className="alert alert-light border text-center">
          Tu carrito está vacío 🍕
        </div>
      </div>
    );
  }

  const isPayDisabled = cart.length === 0 || !token;

  return (
    <div className="container my-5">
      <h2 className="mb-4">🛒 Carrito de compras</h2>

      <div className="list-group mb-4">
        {cart.map((item) => (
          <div
            key={item.id}
            className="list-group-item d-flex align-items-center justify-content-between"
          >
            <div className="d-flex align-items-center gap-3">
              <img
                src={item.img}
                alt={item.name}
                style={{ width: 80, height: 80, objectFit: "cover" }}
                className="rounded"
              />
              <div>
                <h5 className="mb-1">{item.name}</h5>
                <small className="text-muted">
                  Precio unitario: {formatPrice(item.price)}
                </small>
              </div>
            </div>

            <div className="d-flex align-items-center gap-2">
              <button
                className="btn btn-outline-danger btn-sm"
                onClick={() => decrement(item.id)}
              >
                -
              </button>
              <span>{item.count}</span>
              <button
                className="btn btn-outline-success btn-sm"
                onClick={() => increment(item.id)}
              >
                +
              </button>
              <span className="fw-semibold ms-3">
                {formatPrice(item.price * item.count)}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="d-flex justify-content-between align-items-center">
        <h4>Total a pagar: {formatPrice(total)}</h4>
        <button className="btn btn-primary" disabled={isPayDisabled}>
          Pagar
        </button>
      </div>

      {!token && (
        <p className="text-danger mt-2">
          Debes iniciar sesión para poder pagar 🔐
        </p>
      )}
    </div>
  );
};

export default CartPage;
