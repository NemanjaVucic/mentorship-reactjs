import { createContext, useState } from "react";

export const useStockContext = createContext(null);

export const StockContextProvider = ({ children }) => {
  const [inStockOnly, setInStockOnly] = useState(false);
  const context = { inStockOnly, setInStockOnly };

  return (
    <useStockContext.Provider value={context}>
      {children}
    </useStockContext.Provider>
  );
};
