import { create } from "zustand";

type CartItem = {
  id: number | string;
  name: string;
  price: number;
  image: string;
  spiceLevel?: string;
  cartKey: string;
  quantity: number;
};

type CartItemInput = {
  id: number | string;
  name: string;
  price: number | string;
  image: string;
  spiceLevel?: string;
};

type CartStore = {
  cartItems: CartItem[];
  isCartOpen: boolean;
  addToCart: (product: CartItemInput) => void;
  removeFromCart: (productId: number | string) => void;
  updateQuantity: (productId: number | string, quantity: number) => void;
  clearCart: () => void;
  openCart: () => void;
  closeCart: () => void;
};

const toNumberPrice = (price: number | string) => {
  if (typeof price === "number") return Number.isFinite(price) ? price : 0;
  const cleanedPrice = String(price).replace(/[^\d.-]/g, "");
  const parsed = parseFloat(cleanedPrice);
  return Number.isFinite(parsed) ? parsed : 0;
};

const useCartStore = create<CartStore>((set, get) => ({
  cartItems: [],
  isCartOpen: false,
  addToCart: (product) => {
    const spiceLevel = product.spiceLevel ?? "";
    const cartKey = `${product.id}::${spiceLevel || "default"}`;
    const existingItem = get().cartItems.find(
      (item) => item.cartKey === cartKey,
    );

    if (existingItem) {
      set((state) => ({
        cartItems: state.cartItems.map((item) =>
          item.cartKey === cartKey
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        ),
      }));
      return;
    }

    set((state) => ({
      cartItems: [
        ...state.cartItems,
        {
          id: product.id,
          name: product.name,
          price: toNumberPrice(product.price),
          image: product.image,
          spiceLevel,
          cartKey,
          quantity: 1,
        },
      ],
    }));
  },
  removeFromCart: (productId) =>
    set((state) => ({
      cartItems: state.cartItems.filter(
        (item) => item.cartKey !== productId && item.id !== productId,
      ),
    })),
  updateQuantity: (productId, quantity) => {
    if (quantity <= 0) {
      set((state) => ({
        cartItems: state.cartItems.filter(
          (item) => item.cartKey !== productId && item.id !== productId,
        ),
      }));
      return;
    }

    set((state) => ({
      cartItems: state.cartItems.map((item) =>
        item.cartKey === productId || item.id === productId
          ? { ...item, quantity }
          : item,
      ),
    }));
  },
  clearCart: () => set({ cartItems: [] }),
  openCart: () => set({ isCartOpen: true }),
  closeCart: () => set({ isCartOpen: false }),
}));

export default useCartStore;
