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
import { Cart, CartItem, CartItemInput, DataSingleProd, ProductType } from "@/data";
import {   addToCartItems } from "../hook/apiCall";
import { persist } from "zustand/middleware";
import { errorMessage, successMessage } from '../notification';


interface ProductState {
  cartId:string;
  cartItems:CartItemInput[]
  //bisa di hapus
  Product: DataSingleProd[];
  addToCart: (item: DataSingleProd) => void;
  resetCart:()=>void
}

//interface sesuai didatabase
interface cartZustand{
    id: string;
    createdAt: string;
    updatedAt: string;
    userId: string;
    cartItems: CartItem[];
    addToCart: (item: DataSingleProd) => void;
    updateCart:(item: Cart)=> void
    resetCart:()=>void
    
}


// This is a store creator function, not a hook
const useCartStore= create<cartZustand>()(
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
  //add cartItem to backened
  const dataCartItem = await addToCartItems(item);
  //cek if dataCartItems emty return error
  if (!dataCartItem) {
    errorMessage("Invalid cart data from backend")
    throw new Error("Invalid cart data from backend");
  }
  //if success fetch frombackend update cartItem in local
  set(() => ({
    cartItems:dataCartItem
  }));
successMessage("success add to cart")
} catch (error) {
  errorMessage(`${error}`)
  console.error(error)
}
},

updateCart:(item:Cart)=>{
  set(()=>({
      id:item?.id,
      createdAt:item?.createdAt,
      updatedAt:item?.updatedAt,
      userId:item?.userId,
      cartItems:[...item.cartItems],
  }))
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