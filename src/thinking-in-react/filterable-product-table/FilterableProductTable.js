import { useState } from "react";
import ProductTable from "./product-table/ProductTable";
import SearchBar from "./search-bar/SearchBar";

const FilterableProductTable = ({ products }) => {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [inStockOnly, setInStockOnly] = useState(false);

  const handleFilterText = (filterText) =>
    setFilteredProducts(
      products.filter((product) =>
        product.name.toLowerCase().includes(filterText.toLowerCase())
      )
    );

  return (
    <>
      <SearchBar
        inStockOnly={inStockOnly}
        onFilterTextChange={handleFilterText}
        onInStockOnlyChange={setInStockOnly}
      />
      <ProductTable products={filteredProducts} inStockOnly={inStockOnly} />
    </>
  );
};

export default FilterableProductTable;
