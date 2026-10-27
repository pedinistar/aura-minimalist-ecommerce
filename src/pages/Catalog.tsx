import { useState } from "react";
import { mockProducts } from "../data/products";
import { useCartStore } from "../store/useCartStore";
import { useSearchParams } from "react-router";
import ProductCard from "../components/ProductCard";

const allCategories = [
  "All",
  ...Array.from(new Set(mockProducts.map((item) => item.category))),
];

const Catalog = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState("");

  const selectedCategory = searchParams.get("category") ?? "All";

  const selectCategory = (category: string) => {
    if (category === "All") setSearchParams({});
    else setSearchParams({ category });
  };

  const filteredList = mockProducts.filter((item) => {
    const matchedCategory =
      selectedCategory === "All" || item.category === selectedCategory;
    const matchedFilter = item.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());

    return matchedCategory && matchedFilter;
  });

  return (
    <main className="mx-auto max-w-[1680px] px-6 py-12 md:px-10">
      <h1 className="font-display text-5xl font-light text-ink md:text-7xl">
        Catalog
      </h1>

      <div className="mt-10 flex flex-col gap-4 border-b border-hairline pb-6 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-wrap gap-2">
          {allCategories.map((category) => (
            <button
              key={category}
              onClick={() => selectCategory(category)}
              className={`border px-4 py-2 text-xs uppercase tracking-widest ${
                selectedCategory === category
                  ? "border-ink bg-ink text-limestone"
                  : "border-hairline text-ink hover:border-ink"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search"
          className="w-full border border-hairline bg-white px-4 py-2 text-sm outline-none focus:border-ink md:w-64"
        />
      </div>
      {filteredList.length === 0 ? (
        <p className="mt-16 text-center text-muted">
          No products match your search.
        </p>
      ) : (
        <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-12 md:grid-cols-3 lg:grid-cols-4">
          {filteredList.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </main>
  );
};
export default Catalog;
