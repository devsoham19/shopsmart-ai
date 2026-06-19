import ProductCard from "../ProductCard/ProductCard";
import products from "../../Data/Product";

function ProductList() {
  return (
    <>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          name={product.name}
          price={product.price}
        />
      ))}
    </>
  );
}

export default ProductList;