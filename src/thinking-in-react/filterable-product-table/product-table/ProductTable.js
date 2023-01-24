import ProductCategoryRow from "./product-category-row/ProductCategoryRow";
import ProductRow from "./product-row/ProductRow";

const ProductTable = ({ products, inStockOnly }) => {
  let lastCategory = null;
  const rows = products.reduce((acc, product) => {
    if (product.category !== lastCategory) {
      acc.push(
        <ProductCategoryRow
          category={product.category}
          key={product.category}
        />
      );
    }
    acc.push(
      <ProductRow
        product={product}
        key={product.name}
        inStockOnly={inStockOnly}
      />
    );
    lastCategory = product.category;
    return acc;
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
};

export default ProductTable;
