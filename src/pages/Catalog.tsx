import { useState } from "react";
import { mockProducts } from "../data/products";
import { useCartStore } from "../store/useCartStore";

const Catalog = () => {
  const { addToCart } = useCartStore();

  // Filter
  const [selectedCategory, setSelectedCategory] = useState("All");
  const allCategories = [
    "All",
    ...Array.from(new Set(mockProducts.map((item) => item.category))),
  ];

  // Search
  const [searchQuery, setSearchQuery] = useState("");

  const filteredList = mockProducts.filter((item) => {
    const categoryFilter =
      selectedCategory === "All" || item.category === selectedCategory;
    const searchFilter = item.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());

    return categoryFilter && searchFilter;
  });

  return (
    <div>
      <div>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search"
        />
      </div>
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
