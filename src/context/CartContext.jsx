import { createContext, useContext, useState } from "react";

const CartContext = createContext();
export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Agregar producto al carrito
  const addToCart = (pizza) => {
    const exists = cart.find((item) => item.id === pizza.id);

    if (exists) {
      setCart(
        cart.map((item) =>
          item.id === pizza.id
            ? { ...item, count: item.count + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...pizza, count: 1 }]);
    }
  };

  // Quitar producto del carrito
  const removeFromCart = (id) => {
    const product = cart.find((item) => item.id === id);

    if (!product) return;

    if (product.count > 1) {
      setCart(
        cart.map((item) =>
          item.id === id
            ? { ...item, count: item.count - 1 }
            : item
        )
      );
    } else {
      // Si queda en 0, eliminarlo
      setCart(cart.filter((item) => item.id !== id));
    }
  };

  // Total del carrito
  const total = cart.reduce(
    (acc, item) => acc + item.price * item.count,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
