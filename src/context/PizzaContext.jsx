import { createContext } from "react";
import { pizzas as pizzasData } from "../data/pizzas";

export const PizzaContext = createContext();

export const PizzaProvider = ({ children }) => {
  const pizzas = pizzasData;

  return (
    <PizzaContext.Provider value={{ pizzas }}>
      {children}
    </PizzaContext.Provider>
  );
};
