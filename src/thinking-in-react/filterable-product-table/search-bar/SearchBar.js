import { useContext } from "react";
import { InStockOnlyContext } from "../FilterableProductTable";

const SearchBar = ({ filterText, onFilterTextChange, onInStockOnlyChange }) => {
  const handleFilterText = (e) => {
    onFilterTextChange(e.target.value);
  };

  const handleInStockOnlyChange = (e) => {
    onInStockOnlyChange(e.target.checked);
  };
  const inStockOnly = useContext(InStockOnlyContext);

  return (
    <form>
      <input
        type="text"
        value={filterText}
        placeholder="Search..."
        onChange={handleFilterText}
      />
      <label>
        <input
          type="checkbox"
          checked={inStockOnly}
          onChange={handleInStockOnlyChange}
        />{" "}
        Only show products in stock
      </label>
    </form>
  );
};

export default SearchBar;
