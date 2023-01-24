import "./App.css";
import { PRODUCTS } from "./data/products";
import FilterableProductTable from "./filterable-product-table/FilterableProductTable";

export default function App() {
  return <FilterableProductTable products={PRODUCTS} />;
}
