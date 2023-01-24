import "./App.css";
import FilterableProductTable from "./filterableProductTable/FilterableProductTable";
import { PRODUCTS } from "./data/products";

export default function App() {
  return <FilterableProductTable products={PRODUCTS} />;
}
