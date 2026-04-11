import { create } from 'zustand';

const useCartStore = create((set) => ({
    cartItems: [],
    
    addToCart: (product) => set((state) => ({
        cartItems: [...state.cartItems, product]
    })),

    clearCart: () => set({cartItems: []})
}));

export default useCartStore