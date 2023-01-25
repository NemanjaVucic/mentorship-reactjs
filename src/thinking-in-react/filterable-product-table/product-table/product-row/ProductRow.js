import { useContext } from "react";
import { StockContext } from "../../context/StockContext";

const ProductRow = ({ product }) => {
  const context = useContext(StockContext);
  const isVisible = !context.inStockOnly || product.stocked;

  return (
    isVisible && (
      <tr>
        <td>
          <span style={{ color: product.stocked ? "black" : "red" }}>
            {product.name}
          </span>
        </td>
        <td>{product.price}</td>
      </tr>
    )
  );
};

export default ProductRow;
