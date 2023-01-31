import { useState } from "react";
import { StockContextProvider } from "./context/StockContext";
import ProductTable from "./product-table/ProductTable";
import SearchBar from "./search-bar/SearchBar";

const FilterableProductTable = ({ products }) => {
  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleFilterText = (filterText) =>
    setFilteredProducts(
      products.filter((product) =>
        product.name.toLowerCase().includes(filterText.toLowerCase())
      )
    );

  return (
    <StockContextProvider>
      <SearchBar onFilterTextChange={handleFilterText} />
      <ProductTable products={filteredProducts} />
    </StockContextProvider>
  );
};

export default FilterableProductTable;
