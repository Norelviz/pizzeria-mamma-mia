import { createContext, useMemo, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (pizza) => {
    setCart((prev) => {
      const existing = prev.find((p) => p.id === pizza.id);
      if (existing) {
        return prev.map((p) =>
          p.id === pizza.id ? { ...p, count: p.count + 1 } : p
        );
      }
      return [...prev, { ...pizza, count: 1 }];
    });
  };

  const increment = (id) => {
    setCart((prev) =>
      prev.map((p) =>
        p.id === id ? { ...p, count: p.count + 1 } : p
      )
    );
  };

  const decrement = (id) => {
    setCart((prev) =>
      prev
        .map((p) =>
          p.id === id ? { ...p, count: p.count - 1 } : p
        )
        .filter((p) => p.count > 0)
    );
  };

  const clearCart = () => setCart([]);

  const total = useMemo(
    () => cart.reduce((sum, item) => sum + item.price * item.count, 0),
    [cart]
  );

  return (
    <CartContext.Provider
      value={{ cart, addToCart, increment, decrement, clearCart, total }}
    >
      {children}
    </CartContext.Provider>
  );
};
