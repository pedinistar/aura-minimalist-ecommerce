export interface Product {
  id: string;
  name: string;
  tagline: string;
  price: number;
  category: "Furniture" | "Lighting" | "Ceramics" | "Textiles";
  images: string[];
  description: string;
  inStock: boolean;
  dimensions?: string;
  material?: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface CartState {
  cart: CartItem[];
  isCartOpen: boolean;
  toggleCart: () => void;
  addToCart: (product: Product) => void;
  updateQuantity: (id: string, newQuantity: number) => void;
}
