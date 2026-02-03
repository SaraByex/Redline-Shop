import { Link } from "react-router-dom";
import { styles } from "./Styles";

export default function Home() {
  return (
    <div
      style={{
        minHeight: "90vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        background:
          "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1602810319990-96d31eab3de6?auto=format&fit=crop&w=1350&q=80') center/cover no-repeat",
        color: "#fff",
        padding: "0 20px"
      }}
    >
      <h1 style={{ fontSize: "4rem", fontWeight: "700", marginBottom: "20px" }}>
        Redline Boutique
      </h1>
      <p style={{ fontSize: "1.5rem", marginBottom: "30px", maxWidth: "600px" }}>
        Where bold style meets confidence
      </p>
      <Link
        to="/shop"
        style={{
          ...styles.buttonPrimary, // use theme red
          fontSize: "1.2rem",
          padding: "12px 24px",
          textDecoration: "none",
          display: "inline-block",
          textAlign: "center"
        }}
      >
        View Collection
      </Link>
    </div>
  );
}
