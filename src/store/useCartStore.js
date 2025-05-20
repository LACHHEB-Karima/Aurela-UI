import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useCartStore = create(
  persist(
    (set, get) => ({
      cartItems: [],
      error: null,

      addToCart: (product) => {
        const existing = get().cartItems.find(item => item.id === product.id);
        if (existing) {
          if (existing.quantity + 1 > product.stock) {
            set({ error: 'Not enough stock available.' });
            return;
          }
          set({
            cartItems: get().cartItems.map(item =>
              item.id === product.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
            error: null,
          });
        } else {
          if (product.stock < 1) {
            set({ error: 'Product out of stock.' });
            return;
          }
          set(state => ({
            cartItems: [...state.cartItems, { ...product, quantity: 1 }],
            error: null,
          }));
        }
      },

      increaseQuantity: (id) => {
        set(state => {
          const item = state.cartItems.find(i => i.id === id);
          if (!item || item.quantity + 1 > item.stock) {
            return { error: 'Cannot exceed available stock.' };
          }
          return {
            cartItems: state.cartItems.map(i =>
              i.id === id ? { ...i, quantity: i.quantity + 1 } : i
            ),
            error: null,
          };
        });
      },

      decreaseQuantity: (id) => {
        set(state => ({
          cartItems: state.cartItems.map(i =>
            i.id === id && i.quantity > 1 ? { ...i, quantity: i.quantity - 1 } : i
          ),
          error: null,
        }));
      },

      removeItem: (id) => {
        set(state => ({
          cartItems: state.cartItems.filter(i => i.id !== id),
          error: null,
        }));
      },

      clearError: () => set({ error: null }),
    }),
    {
      name: 'cart-storage', 
      partialize: (state) => ({ cartItems: state.cartItems }), 
    }
  )
);

export default useCartStore;
