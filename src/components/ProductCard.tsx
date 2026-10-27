import { Link } from "react-router";
import type { Product } from "../types/ecommerce";

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <Link to={`product/${product.id}`} className="group block">
      <div className="relative aspect-4/5 overflow-hidden bg-stone">
        <img
          src={product.images[0]}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {!product.inStock && (
          <span className="absolute left-3 top-3 bg-white px-2 py-1 text-[10px] uppercase tracking-widest text-ink">
            Sold out
          </span>
        )}
      </div>

      <div className="mt-3 flex items-start justify-between gap-4">
        <div>
          <p className="font-display text-sm font-medium text-ink">
            {product.name}
          </p>
          <p className="mt-1 text-[11px] uppercase tracking-widest text-muted">
            {product.category}
          </p>
        </div>
        <p className="text-sm text-ink">
          {product.price.toLocaleString("en-IN")}
        </p>
      </div>
    </Link>
  );
};
export default ProductCard;
