import React from "react";
import { useCart } from "../context/CartContext";
import { createPayment } from "../api/payments";
import { styles, breakpoints } from "./Styles";

const isMobile = window.innerWidth <= breakpoints.mobile;

export default function Cart() {
  const { cart, removeFromCart, handleCheckout } = useCart();

  const formatPrice = v => (parseFloat(v) || 0).toFixed(2);

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  const paypalCheckout = async () => {
    const payment = await createPayment(cart);
    const approval = payment.links.find(l => l.rel === "approval_url");
    if (approval) window.location.href = approval.href;
  };

  const infoRow = (label, value) => (
    <div style={{ ...styles.layoutRow, marginTop: 4 }}>
      <span style={styles.label}>{label}</span>
      <span>{value}</span>
    </div>
  );

  return (
    <div>
      {cart.length === 0 && <p>Your cart is empty</p>}

      {cart.map(item => (
        <div
          key={item.id}
          style={{
            ...styles.card,
            backgroundColor: "#686666",
            marginBottom: 12
          }}
        >
          <strong>{item.name}</strong>

          {item.color && (
            <div style={{ ...styles.layoutRow, marginTop: 4 }}>
              <span style={styles.label}>Color:</span>
              <div
                style={{
                  ...styles.colorBox,
                  backgroundColor: item.color
                }}
              />
            </div>
          )}

          {item.size && infoRow("Size:", item.size)}
          {infoRow("Price:", `$${formatPrice(item.price)}`)}
          {infoRow("Qty:", item.qty)}
          {infoRow(
            "Subtotal:",
            <strong>${formatPrice(item.price * item.qty)}</strong>
          )}

          <button
            onClick={() => removeFromCart(item.id)}
            style={{ ...styles.buttonPrimary, marginTop: 8 }}
          >
            Remove
          </button>
        </div>
      ))}

      <h5>Grand Total: ${formatPrice(total)}</h5>

      <div
        style={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          gap: 12,
          marginTop: 12
        }}
      >
        <button
          onClick={handleCheckout}
          disabled={!cart.length}
          style={styles.buttonPrimary}
        >
          Checkout
        </button>

        <button
          onClick={paypalCheckout}
          disabled={!cart.length}
          style={styles.buttonPrimary}
        >
          Pay with PayPal
        </button>
      </div>
    </div>
  );
}
