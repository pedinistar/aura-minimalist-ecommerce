import { mockProducts } from "../data/products";
import { useCartStore } from "../store/useCartStore";

const Catalog = () => {
  const addToCart = useCartStore((state) => state.addToCart);

  return (
    <div>
      {mockProducts.map((product) => (
        <div
          key={product.id}
          style={{ border: "2px solid black", marginTop: "20px" }}
        >
          <p>{product.name}</p>
          <p>₹ {product.price}</p>
          <span>{product.category}</span>
          <button onClick={() => addToCart(product)}>Add to cart</button>
        </div>
      ))}
    </div>
  );
};
export default Catalog;
