import { useContext } from "react";
import { useStockContext } from "../../context/StockContext";

const ProductRow = ({ product }) => {
  const { inStockOnly } = useContext(useStockContext);
  const isVisible = !inStockOnly || product.stocked;

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
