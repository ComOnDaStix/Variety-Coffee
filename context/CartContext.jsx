import { useState, createContext, useEffect } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [itemAdded, setItemAdded] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedCartItems = localStorage.getItem("cartItems");
      setCartItems(savedCartItems ? JSON.parse(savedCartItems) : []);
    }
  }, []);


  const addItem = (item) => {
    const existingItemIndex = cartItems.findIndex(
      (cartItem) => cartItem.id === item.id
    );

    if (existingItemIndex !== -1) {
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingItemIndex].quantity += 1;
      setCartItems(updatedCartItems);
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }

    setItemAdded(true);
  };

  const removeItem = (itemId) => {
    setCartItems(cartItems.filter((item) => item.id !== itemId));
  };

  const updateItemQuantity = (itemId, newQuantity) => {
    const updatedCartItems = cartItems.map((item) =>
      item.id === itemId ? { ...item, quantity: newQuantity } : item
    );
    setCartItems(updatedCartItems);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }
  }, [cartItems]);

  const cartValue = {
    cartItems,
    addItem,
    removeItem,
    updateItemQuantity,
    itemAdded,
    setItemAdded,
  };

  return (
    <CartContext.Provider value={cartValue}>{children}</CartContext.Provider>
  );
};

export { CartContext, CartProvider };
