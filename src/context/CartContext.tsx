import { createContext, ReactNode, useContext, useState } from "react";
import { ProductsProps } from "../Products/ProductList";

interface ContextType {
  cart: ProductsProps[];
  setCart: React.Dispatch<React.SetStateAction<ProductsProps[]>>;
  addToCart: (product: ProductsProps) => void;
  clearCart: () => void;
  removeItemFromCart: (product: ProductsProps) => void;
}

interface ContextProviderType {
  children: ReactNode;
}

export const CartContext = createContext<ContextType | null>(null);

export const CartContextProvider = ({ children }: ContextProviderType) => {
  const [cart, setCart] = useState<ProductsProps[]>([]);

  const addToCart = (product: ProductsProps) => {
    setCart(prevCart => [...prevCart, product]);
  };

  const removeItemFromCart = (product: ProductsProps) => {
    setCart(prevCart => prevCart.filter(item => item.id !== product.id));
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, setCart, clearCart, removeItemFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCartContext must be used within a CartContextProvider");
  }
  return context;
};
