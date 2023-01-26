import { createContext, useContext, useState } from "react";

export const StockContext = createContext(null);

export const StockContextProvider = ({ children }) => {
  const [inStockOnly, setInStockOnly] = useState(false);
  const context = { inStockOnly, setInStockOnly };

  return (
    <StockContext.Provider value={context}>{children}</StockContext.Provider>
  );
};

export const useStockContext = () => {
  const context = useContext(StockContext);

  if (!context) {
    throw new Error(
      "useStockContext can not be used outside of StockContextProvider"
    );
  }
  return context;
};
