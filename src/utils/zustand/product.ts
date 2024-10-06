import Product from '@/app/product/page';
import { ProductType } from '@/data'
import { create } from 'zustand'
import { persist } from "zustand/middleware";


interface ProductState {
  Product: ProductType[]
  addProduct :(item:ProductType[])=> void
  updateProduct :(item:ProductType[])=> void
}

const useProduct = create<ProductState>()(
  persist(
  (set,get) => ({
 Product: [],
  addProduct:(item)=>  {
    const currentState = get().Product;
   // Jika `item` adalah array, sebarkan ke dalam array
  if (Array.isArray(item)) {
    set({ Product: [...currentState, ...item] });
  } else {
    // Jika `item` adalah satu object produk, tambahkan langsung
    set({ Product: [...currentState, item] });
  }
  },

  updateProduct:(item)=>{
    set(()=>({
      Product:item
    }))
  }
}),
{
  name:"product"
}
  )
)

export default useProduct