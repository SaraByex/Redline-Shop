import React from "react";
import ColorBox from "./ColorBox";

function ColorSelector({ colorsArray }) {
  return (
    <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
      {colorsArray.map((c, i) => (
        <ColorBox key={i} color={c} />
      ))}
    </div>
  );
}

export default ColorSelector;