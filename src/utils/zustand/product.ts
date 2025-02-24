import Product from '@/app/(page)/product/page';
import { ProductType } from '@/data'
import { create } from 'zustand'
import { persist } from "zustand/middleware";


interface ProductState {
  product: ProductType[]
  newProduct :ProductType[]
  addProduct :(item:ProductType[])=> void
  updateProduct :(item:ProductType[]| undefined)=> void
}

const useProduct = create<ProductState>()(
  persist(
  (set,get) => ({
 product: [],
 newProduct:[],

 //tambahkan product jika ada product baru
  addProduct:(item)=>  {
   // Jika `item` adalah array, sebarkan ke dalam array
    set((state)=>({ product: item?
      [...state.product, ...item.filter((newItem)=>!state.product.some(exits=> exits.id===newItem.id))] :state.product}));
  },


//update ketika ada perubahan data product
  updateProduct:(item)=>{
    set(()=>({
      product:item
    }))
  }
}),
{
  name:"product",
  onRehydrateStorage: () => {
    console.log("Status telah direhidrasi dari local storage");
  },
}
  )
)

export default useProduct