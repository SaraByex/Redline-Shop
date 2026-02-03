import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Add product with specific color, size, qty as separate entry
const addToCart = (product, color, size, qty = 1) => {
  setCart(prev => [
    ...prev,
    {
      id: product.id, // Firebase ID from backend
      name: product.name,
      price: product.price,
      stock: product.stock, // optional, for frontend validation
      qty,
      color,
      size,
    }
  ]);

  };

  const removeFromCart = (id) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const handleCheckout = async () => {
  try {
    const itemsToSend = cart.map(cartItem => ({
      id: cartItem.id,
      qty: cartItem.qty,
      color: cartItem.color,
      size: cartItem.size
    }));

    const res = await fetch("http://localhost:5000/capture", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ cart: itemsToSend })
    });

    const data = await res.json();

    if (data.status === "success") {
      alert("Checkout successful!");
      setCart([]);
    } else {
      alert(data.error || "Checkout failed");
    }
  } catch (err) {
    console.error(err);
    alert("Checkout failed. See console.");
  }
};

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, handleCheckout }}>
      {children}
    </CartContext.Provider>
  );
};
