// import { ProductType } from "@/data"
// import { StateCreator } from "zustand";

// interface ProductState {
//     Product: ProductType[]
//     addToCart: (item: ProductType) => void;
//   }

// const useCartStore :StateCreator<ProductState>=(set,get)=>({
//  Product:[],
//  addToCart: (item) => {
//     const currentCart = get().Product;
//     set({ Product: [...currentCart, item] });
//   },
// })

// export default useCartStore;

// /src/store/cartZustand.ts
import { StateCreator } from "zustand";
import { ProductType } from "@/data";

interface ProductState {
    Product: ProductType[];
    addToCart: (item: ProductType) => void;
}

// This is a store creator function, not a hook
const useCartStore: StateCreator<ProductState> = (set, get, store) => ({
  Product: [],
  addToCart: (item: ProductType) => {
    const currentCart = get().Product;
    set({ Product: [...currentCart, item] });
  },
});

export default useCartStore;
