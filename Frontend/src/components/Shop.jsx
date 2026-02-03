import React, { useEffect, useState } from "react";
import Catalogue from "./Catalogue";
import Cart from "./Cart";
import { styles, responsive, breakpoints } from "./Styles";

function Shop() {
  const [isMobile, setIsMobile] = useState(
    window.innerWidth <= breakpoints.mobile
  );

  useEffect(() => {
    const onResize = () => {
      setIsMobile(window.innerWidth <= breakpoints.mobile);
    };

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <div
      style={{
        ...styles.pageContainer,
        ...(isMobile ? responsive.shopMobile : responsive.shopDesktop)
      }}
    >
      <div
        style={{
          flex: 2,
          paddingRight: isMobile ? 0 : 12,
          maxHeight: isMobile ? "auto" : "90vh",
          overflowY: isMobile ? "visible" : "auto"
        }}
      >
        <h2>Catalogue</h2>
        <Catalogue />
      </div>

      <div
        style={{
          ...styles.card,
          ...(isMobile ? responsive.cartMobile : responsive.cartDesktop)
        }}
      >
        <h3>Your Cart</h3>
        <Cart />
      </div>
    </div>
  );
}

export default Shop;