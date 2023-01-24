const ProductRow = ({ product, inStockOnly }) => {
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
