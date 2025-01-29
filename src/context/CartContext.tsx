import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { ProductsProps } from "../Products/ProductList";

interface ContextType {
  cart: ProductsProps[];
  setCart: React.Dispatch<React.SetStateAction<ProductsProps[]>>;
  addToCart: (product: ProductsProps) => void;
  clearCart: () => void;
  removeItemFromCart: (product: number) => void;
  getSubtotal: () => number;
}

interface ContextProviderType {
  children: ReactNode;
}

export const CartContext = createContext<ContextType | null>(null);

export const CartContextProvider = ({ children }: ContextProviderType) => {
  const [cart, setCart] = useState<ProductsProps[]>(() => {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product: ProductsProps) => {
    setCart(prevCart => [...prevCart, product]);
  };

  const removeItemFromCart = (indexProduct: number) => {
    setCart(prevCart => prevCart.filter((_, index) => index !== indexProduct));
  };

  const clearCart = () => {
    setCart([]);
  };

  const getSubtotal = () => {
    return cart.reduce((total, product) => total + product.price, 0);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        setCart,
        clearCart,
        removeItemFromCart,
        getSubtotal,
      }}
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
