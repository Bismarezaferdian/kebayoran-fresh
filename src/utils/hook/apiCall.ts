import { Cart, CategoryProduct, DataSingleProd } from "@/data"
import { promises } from "dns"
import useSWR from "swr"

const fether = (url:string)=> fetch(url).then((res)=>res.json())

export const useGetCategory= ()=>{
    const {
        data:categories,
        isLoading,
        error
    }= useSWR<CategoryProduct>(`${process.env.NEXT_PUBLIC_URL}/api/category`,fether)

    return {categories,isLoading,error}
}


export const useGetProduct= ()=>{
    const {
        data:products,
        isLoading,
        mutate,
        error
    }= useSWR<CategoryProduct>(`${process.env.NEXT_PUBLIC_URL}/api/product`,fether)

    return {products,isLoading,mutate,error}
}

export const useGetCart =  (id:string)=>{
    const {
        data:carts,
        isLoading,
        mutate,
        error
    }= useSWR<Cart>(id?`${process.env.NEXT_PUBLIC_URL}/api/cart/${id}`:null,fether)

    return {carts, isLoading, mutate, error}
}

export const addToCartHook = async(item: DataSingleProd)=>{
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/cartItem`,
    {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(item),
      }
    )
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return response.json()
    
    } catch (error) {
        throw error;
    }
    
}