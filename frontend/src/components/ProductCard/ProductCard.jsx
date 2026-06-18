import "./ProductCard.css";

function ProductCard({ name, price }) {
  return (
    <div className="product-card">
      <h3>{name}</h3>
      <p>₹{price}</p>

      <button>Add to Wishlist</button>
    </div>
  );
}

export default ProductCard;