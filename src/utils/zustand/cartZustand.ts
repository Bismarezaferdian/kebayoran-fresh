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
import { create } from 'zustand'
import { CartItemInput, DataSingleProd, ProductType } from "@/data";
import {  addToCartHook } from "../hook/apiCall";
import { persist } from "zustand/middleware";
import { CartItem } from '@prisma/client';


interface ProductState {
  cartId:string;
  cartItems:CartItemInput[]
  //bisa di hapus
  Product: DataSingleProd[];
  addToCart: (item: DataSingleProd) => void;
  resetCart:()=>void
}

//interface sesuai didatabase
interface Cart{
    id: string;
    createdAt: string;
    updatedAt: string;
    userId: string;
    cartItems: CartItemInput[];
    addToCart: (item: DataSingleProd) => void;
}


// This is a store creator function, not a hook
const useCartStore= create<Cart>()(
persist(
  (set,get)=>({
    //sesuikan dengan yang ada di database
    id:null,
    createdAt: null,
    updatedAt: null,
    userId:null,
    cartItems:[],
    // cartId:null,
    //bisa dihapus
    // Product:[],

 // Fungsi reset state
 resetCart: () => {
  set({
    id:null,
    createdAt: null,
    updatedAt: null,
    userId:null,
    cartItems:[],
    // cartId: null,
    // Product: []
  })
},

addToCart: async (item:DataSingleProd)=>{
try {
  //const {quatitiy,optionId.prodId,cartId}= items
  // Assume addToCartHook is a function that handles adding the item to the backend
  const dataProduct = await addToCartHook(item);
  // const dataProductInStorage= get().Product
  // Benar: Update state menggunakan set
  console.log(dataProduct)
  set((state) => ({
    cartItems:dataProduct
    // cartItems:dataProduct
    // Product:dataProduct
  }));
} catch (error) {
  console.log(error)
}
},


  })
  ,{
name:"cart"
}
)
)
export default useCartStore;


// persist(
//   (set,get) => ({
//    cartId:null,
//    Product: [],
//    addToCart:async(item: DataSingleProd) => {
//      try {
//        // Assume addToCartHook is a function that handles adding the item to the backend
//        const dataProduct = await addToCartHook(item);
 
//        // Log the response from the hook
//        console.log(dataProduct);
 
//        // Update the local state with the new product
//        const currentCart = get().Product;
//        set({ Product: [...currentCart, item] });
//      } catch (error) {
//        console.error('Failed to add product to cart:', error);
//      }
 
//  }),
//  {
//    name:"category"
//   }
 
//  )