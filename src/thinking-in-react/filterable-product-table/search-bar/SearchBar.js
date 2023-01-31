import { useStockContext } from "../context/StockContext";

const SearchBar = ({ filterText, onFilterTextChange }) => {
  const { inStockOnly, setInStockOnly } = useStockContext();
  const handleFilterText = (e) => {
    onFilterTextChange(e.target.value);
  };

  const handleInStockOnlyChange = (e) => {
    setInStockOnly(e.target.checked);
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
          checked={inStockOnly}
          onChange={handleInStockOnlyChange}
        />{" "}
        Only show products in stock
      </label>
    </form>
  );
};

export default SearchBar;
