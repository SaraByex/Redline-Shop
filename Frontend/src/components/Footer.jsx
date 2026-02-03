import React from "react";
import { NavLink } from "react-router-dom";
import { styles, colors } from "./Styles";

export default function Footer() {
  return (
    <footer
      style={{
        marginTop: 40,
        padding: "20px",
        borderTop: `1px solid ${colors.borderDark}`,
        backgroundColor: colors.bgCard,
        color: colors.textLight
      }}
    >
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          gap: 16
        }}
      >
        <div>
          <div style={{ fontWeight: "bold", marginBottom: 6 }}>
            © 2026
          </div>
          <div>Designed by Sarah Byekwaso</div>
        </div>

        <div>
          <div style={{ fontWeight: "bold", marginBottom: 6 }}>
            Contact
          </div>
          <div>Email: sarabyex@gmail.com</div>
          <div>Phone: +1 XXX XXX XXXX</div>
        </div>

        <div>
          <div style={{ fontWeight: "bold", marginBottom: 6 }}>
            Follow
          </div>
          <div style={{ display: "flex", gap: 12 }}>
            <a href="https://github.com" style={styles.linkPrimary}>GitHub</a>
            <a href="https://linkedin.com" style={styles.linkPrimary}>LinkedIn</a>
            <a href="https://twitter.com" style={styles.linkPrimary}>X</a>
          </div>
        </div>
      </div>
    </footer>
  );
}