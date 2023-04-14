import { useState, createContext } from "react";

const CartContext = createContext();
console.log()

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [buttonClicked, setButtonClicked] = useState(false);

  const addItem = (item) => {
    setCartItems([...cartItems, item]);
    setButtonClicked(true);
  };

  const removeItem = (itemId) => {
    setCartItems(cartItems.filter((item) => item.id !== itemId));
  };

  const cartValue = {
    cartItems,
    addItem,
    removeItem,
  };

  return (
    <CartContext.Provider value={cartValue}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };