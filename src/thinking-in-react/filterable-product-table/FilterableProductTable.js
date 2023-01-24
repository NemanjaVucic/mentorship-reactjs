import { useState, createContext } from "react";
import ProductTable from "./product-table/ProductTable";
import SearchBar from "./search-bar/SearchBar";

export const InStockOnlyContext = createContext(null);

const FilterableProductTable = ({ products }) => {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [inStockOnly, setInStockOnly] = useState(false);

  const handleFilterText = (filterText) =>
    setFilteredProducts(
      products.filter((product) =>
        product.name.toLowerCase().includes(filterText.toLowerCase())
      )
    );

  const handleInStockOnly = (inStockOnly) => {
    setInStockOnly(inStockOnly);
  };

  return (
    <InStockOnlyContext.Provider value={inStockOnly}>
      <SearchBar
        onFilterTextChange={handleFilterText}
        onInStockOnlyChange={handleInStockOnly}
      />
      <ProductTable products={filteredProducts} />
    </InStockOnlyContext.Provider>
  );
};

export default FilterableProductTable;
