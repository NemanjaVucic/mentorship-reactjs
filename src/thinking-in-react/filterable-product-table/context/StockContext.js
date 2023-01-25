import { createContext, useState } from "react";

export const StockContext = createContext(null);

const StockContextProvider = ({ children }) => {
  const [inStockOnly, setInStockOnly] = useState(false);
  const context = { inStockOnly, setInStockOnly };

  return (
    <StockContext.Provider value={context}>{children}</StockContext.Provider>
  );
};

export default StockContextProvider;
