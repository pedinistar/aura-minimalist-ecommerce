import { useState } from "react";
import { mockProducts } from "../data/products";
import { useCartStore } from "../store/useCartStore";

const Catalog = () => {
  const { cart, addToCart } = useCartStore();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const allCategories = [
    "All",
    ...Array.from(new Set(mockProducts.map((item) => item.category))),
  ];
  const filteredList = mockProducts.filter((item) => {
    if (selectedCategory === "All") return true;
    return item.category === selectedCategory;
  });

  return (
    <div>
      <div>
        {allCategories.map((item) => (
          <button onClick={() => setSelectedCategory(item)}>{item}</button>
        ))}
      </div>
      {filteredList.map((product) => (
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
