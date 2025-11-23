import { createContext, useState } from "react";
import { pizzas } from "../data/pizzas";

export const PizzaContext = createContext();

export const PizzaProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (pizza) => {
    const existing = cart.find((p) => p.id === pizza.id);
    if (existing) {
      setCart(
        cart.map((p) =>
          p.id === pizza.id ? { ...p, count: p.count + 1 } : p
        )
      );
    } else {
      setCart([...cart, { ...pizza, count: 1 }]);
    }
  };

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.count,
    0
  );

  return (
    <PizzaContext.Provider value={{ pizzas, cart, setCart, addToCart, total }}>
      {children}
    </PizzaContext.Provider>
  );
};
