import { useContext } from "react";
import { StockContext } from "../context/StockContext";

const SearchBar = ({ filterText, onFilterTextChange }) => {
  const context = useContext(StockContext);
  const handleFilterText = (e) => {
    onFilterTextChange(e.target.value);
  };

  const handleInStockOnlyChange = (e) => {
    context.setInStockOnly(e.target.checked);
  };

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
          checked={context.inStockOnly}
          onChange={handleInStockOnlyChange}
        />{" "}
        Only show products in stock
      </label>
    </form>
  );
};

export default SearchBar;
