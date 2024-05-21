"use client";

import { ReactNode, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setCartId, useCart } from "@/app/store/store";
interface CartInitializerProps {
  children: ReactNode;
}

const CartInitializer: React.FC<CartInitializerProps> = ({ children }) => {
  const dispatch = useDispatch();
  const cart = useCart();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const cartIdFromLocalStorage = localStorage.getItem("cartid");
      if (cartIdFromLocalStorage) {
        dispatch(setCartId(cartIdFromLocalStorage));
      }
    }
  }, [dispatch]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      cart.cartId && localStorage.setItem("cartid", cart.cartId);
    }
  }, [cart.cartId]);
  return children;
};

export default CartInitializer;
