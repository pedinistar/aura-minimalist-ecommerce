import { create } from "zustand";
import type { CartState } from "../types/ecommerce";
import { persist } from "zustand/middleware";

export const useCartStore = create<CartState>()(
  persist(
    (set) => ({
      cart: [],

      isCartOpen: false,
      toggleCart: () => set((state) => ({ isCartOpen: !state.isCartOpen })),

      addToCart: (product) =>
        set((state) => {
          const existingItem = state.cart.find(
            (item) => item.id === product.id,
          );

          if (existingItem) {
            return {
              isCartOpen: true,
              cart: state.cart.map((item) =>
                item.id === product.id
                  ? { ...existingItem, quantity: item.quantity + 1 }
                  : item,
              ),
            };
          }

          return {
            isCartOpen: true,
            cart: [...state.cart, { ...product, quantity: 1 }],
          };
        }),

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
    }),
    {
      name: "aura-cart", // the localStorage key
      partialize: (state) => ({ cart: state.cart }),
    },
  ),
);
