import { CategoryApi } from "@/data";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface CategoryState {
    category: CategoryApi[]
    getCategory : (item:CategoryApi[] | undefined)=>void

}


export const useCategory = create<CategoryState>()(
    persist(
        (set,get)=>({
            category: [],
            getCategory: (item) => set((state) => ({
                 // Menambahkan item baru ke dalam array category
                category: item?[
                    ...state.category, 
                    ...item.filter(newItem => !state.category.some(existing => existing.id === newItem.id))  // Prevent duplicates based on 'id'
                  ] : state.category,
              })),

              resetState:()=> {set({category:[]})}
            
        }),
           {
            name:"category"
           }
    )
)

  //PENDEKATAN INI KURANG EFESIEN KARNA KIRA PERLU MENGUNAKAN GET 
            // getCategory: (item)=>{
            //    const currentCategory = get().category
            //    set({})
            // }

