import React, { useState } from "react";
import { styles } from "./Styles";

const CartSizeSelector = ({ sizes }) => {
  const [selectedSize, setSelectedSize] = useState(sizes[0]);

  return (
    <div style={{ margin: "8px 0", ...styles.sizeContainer }}>
      <label style={{ marginRight: 8, color: colors.textLight }}>
  Size:
</label>
<div style={styles.sizeContainer}>
  {sizes.map(size => (
    <div
      key={size}
      style={{
        ...styles.sizeBox,
        borderColor: size === selectedSize ? colors.primary : colors.borderDark
      }}
      onClick={() => setSelectedSize(size)}
    >
      {size}
    </div>
  ))}
</div>
    </div>
  );
};

export default CartSizeSelector;