import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { styles, colors } from "./Styles";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";


export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();

  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [qty, setQty] = useState(1);

  const formatPrice = v => (parseFloat(v) || 0).toFixed(2);

  const handleAddToCart = () => {
    if (!user) {
      navigate("/register");
      return;
    }

    if (!selectedColor || !selectedSize) {
      alert("Please select a color and size");
      return;
    }

    addToCart(
      {
        id: product.id,
        name: product.name,
        price: Number(product.price),
        stock: product.stock
      },
      selectedColor,
      selectedSize,
      qty
    );
  };

  return (
    <div style={styles.card}>
      <img src={product.image} alt={product.name} style={styles.image} />

      <h3>{product.name}</h3>
      <p>${formatPrice(product.price)}</p>
      
      

      {product.colors?.length > 0 && (
  <div style={{ marginBottom: 8 }}>
    <div style={styles.label}>Color:</div>

    <div style={styles.sizeContainer}>
      {product.colors.map(color => (
        <div
          key={color}
          onClick={() => setSelectedColor(color)}
          style={{
            ...styles.colorBox,
            backgroundColor: color,
            border:
              selectedColor === color
                ? `2px solid ${colors.primary}`
                : styles.colorBox.border,
            cursor: "pointer"
          }}
        />
      ))}
    </div>
  </div>
)}

      {product.sizes?.length > 0 && (
  <div style={{ marginBottom: 8 }}>
    <div style={styles.label}>Size:</div>

    <div style={styles.sizeContainer}>
      {product.sizes.map(size => (
        <span
          key={size}
          onClick={() => setSelectedSize(size)}
          style={{
            ...styles.sizeBox,
            border:
              selectedSize === size
                ? `2px solid ${colors.primary}`
                : styles.sizeBox.border
          }}
        >
          {size}
        </span>
      ))}
    </div>
  </div>
)}

      <div style={{ marginBottom: 8, display: "flex", alignItems: "center", gap: 8 }}>
        <span>Qty:</span>
        <input
          type="number"
          min={1}
          max={product.stock}
          value={qty}
          onChange={e => setQty(Number(e.target.value))}
          style={{ width: 50 , ...styles.sizeBox}}
        />
      </div>

      <button
        onClick={handleAddToCart}
        style={styles.buttonPrimary}
        disabled={product.stock === 0}
      >
        Add to Cart
      </button>
    </div>
  );
}