import { useCart } from "../context/CartContext";

const CartPage = () => {
  const { cart, addToCart, removeFromCart, total } = useCart();

  return (
    <div className="container mt-4">
      <h2 className="mb-4">🛒 Tu Carrito</h2>

      {cart.length === 0 ? (
        <div className="alert alert-info text-center">
          Tu carrito está vacío. ¡Añade alguna pizza! 🍕
        </div>
      ) : (
        <>
          {cart.map((item) => (
            <div
              key={item.id}
              className="card mb-3 shadow-sm p-3"
              style={{ maxWidth: "650px", margin: "0 auto" }}
            >
              <div className="row g-0 align-items-center">

                {/* Imagen */}
                <div className="col-md-4">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="img-fluid rounded"
                    style={{ height: "140px", objectFit: "cover", width: "100%" }}
                  />
                </div>

                {/* Info */}
                <div className="col-md-8">
                  <div className="card-body">

                    <h5 className="card-title">{item.name}</h5>

                    <p className="card-text mb-2">
                      Precio unitario:{" "}
                      <strong>${item.price.toLocaleString("es-CL")}</strong>
                    </p>

                    {/* Botones + - */}
                    <div className="d-flex align-items-center gap-3">
                      <button
                        className="btn btn-outline-danger btn-sm"
                        onClick={() => removeFromCart(item.id)}
                      >
                        −
                      </button>

                      <span className="fw-bold">{item.count}</span>

                      <button
                        className="btn btn-outline-success btn-sm"
                        onClick={() => addToCart(item)}
                      >
                        +
                      </button>
                    </div>

                    {/* Subtotal */}
                    <p className="card-text mt-3">
                      Subtotal:{" "}
                      <strong>
                        ${(item.price * item.count).toLocaleString("es-CL")}
                      </strong>
                    </p>

                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* TOTAL FINAL */}
          <div
            className="card shadow-sm p-4 text-center mt-4"
            style={{ maxWidth: "650px", margin: "0 auto" }}
          >
            <h3 className="mb-3">
              Total a pagar:{" "}
              <strong>${total.toLocaleString("es-CL")}</strong>
            </h3>

            <button className="btn btn-success btn-lg w-100">
              Ir a pagar 💳
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
