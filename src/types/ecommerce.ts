export interface Product {
  id: string;
  name: string;
  tagline: string;
  price: number;
  category: string;
  images: string[];
  description: string;
  inStock: boolean;
  dimensions: string;
  material: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface CartState {
  isCartOpen: boolean;
  toggleCart: () => boolean;
  cart: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, newQuantity: number) => void;
  clearCart: () => void;
}
