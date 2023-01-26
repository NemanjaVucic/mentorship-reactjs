import { createContext, useContext, useState } from "react";

export const StockContext = createContext(null);

export const StockContextProvider = ({ children }) => {
  const [inStockOnly, setInStockOnly] = useState(false);
  const context = { inStockOnly, setInStockOnly };

  return (
    <useStockContext.Provider value={context}>
      {children}
    </useStockContext.Provider>
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
