import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { styles } from "./Styles";

const Catalogue = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then(res => res.json())
      .then(data => {
        const normalized = Object.entries(data || {}).map(
          ([id, product]) => ({
            id,
            ...product
          })
        );
        setProducts(normalized);
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <div style={styles.catalogue}>
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Catalogue;
