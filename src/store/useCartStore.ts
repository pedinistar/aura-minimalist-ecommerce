import { create } from "zustand";
import { CartState, Product } from "../types/ecommerce";

export const useCartStore = create<CartState>((set) => ({
  cart: [],

  addToCart: (product) =>
    set((state) => {
      const existingItem = state.cart.find((item) => item.id === product.id);

      if (existingItem) {
        return {
          cart: state.cart.map((item) =>
            item.id === product.id
              ? { ...existingItem, quantity: item.quantity + 1 }
              : item,
          ),
        };
      }

      return { cart: [...state.cart, { ...product, quantity: 1 }] };
    }),

  removeFromCart: (id) =>
    set((state) => ({
      cart: state.cart.filter((item) => item.id !== id),
    })),

  updateQuantity: (id, newQuantity) =>
    set((state) => {
      if (newQuantity <= 0) {
        return {
          cart: state.cart.filter((item) => item.id !== id),
        };
      }

      return {
        cart: state.cart.map((item) =>
          item.id === id ? { ...item, quantity: newQuantity } : item,
        ),
      };
    }),

  clearCart: () =>
    set({
      cart: [],
    }),
}));
