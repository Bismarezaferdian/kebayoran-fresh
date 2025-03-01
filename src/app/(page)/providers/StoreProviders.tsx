"use client";
import { Cart } from "@/data";
import { useGetCart, useGetSession } from "@/utils/hook/apiCall";
import useCartStore from "@/utils/zustand/cartZustand";
import { useEffect } from "react";

const StoreProviders = ({ children }: { children: React.ReactNode }) => {
  const { session } = useGetSession();
  const { carts, isLoading, error } = useGetCart(session?.userId);
  const { updateCart } = useCartStore();

  //fetch data cart
  useEffect(() => {
    //fething cart
    const getCart = async (): Promise<void> => {
      //ensure user is Loggedin
      if (!session?.isLoggedIn || !session.userId) return;
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_URL}/api/cart/${session?.userId}`
        );
        if (!response.ok) throw new Error("Failed to fetch cart");

        const data: Cart = await response.json();
        //update Local cart zustand if response.ok true
        updateCart(data);
      } catch (error) {
        console.error("Error fetching cart:", error);
      }
    };

    getCart();
  }, [session?.isLoggedIn, updateCart, session]);

  return <>{children}</>;
};

export default StoreProviders;
