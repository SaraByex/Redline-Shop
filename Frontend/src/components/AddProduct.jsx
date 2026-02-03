import React, { useState, useRef } from "react";
import { getStorage, ref as storageRef, uploadBytes, getDownloadURL } from "firebase/storage";
import { getDatabase, ref as dbRef, push } from "firebase/database";
import { app } from "../firebase";

export default function AddProduct() {
  const [file, setFile] = useState(null);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [sizes, setSizes] = useState("");
  const [colors, setColors] = useState("");
  const [loading, setLoading] = useState(false);
  const fileInputRef = useRef();

  const handleUpload = async (e) => {
    e.preventDefault();

    if (!file || !name || !price || !stock) {
      alert("Please fill in all required fields and select an image.");
      return;
    }

    if (Number(price) <= 0 || Number(stock) < 0) {
      alert("Price must be > 0 and stock cannot be negative.");
      return;
    }

    setLoading(true);

    try {
      // Upload image to Firebase Storage
      const storage = getStorage(app);
      const imageRef = storageRef(storage, `products/${Date.now()}_${file.name}`);
      await uploadBytes(imageRef, file);
      const imageUrl = await getDownloadURL(imageRef);

      // Prepare product object
      const productData = {
        name: name.trim(),
        price: Number(Number(price).toFixed(2)),
        stock: Number(stock),
        sizes: sizes ? sizes.split(",").map(s => s.trim()) : [],
        colors: colors ? colors.split(",").map(c => c.trim()) : [],
        image: imageUrl,
        createdAt: Date.now(),
      };

      // Push product to Firebase Realtime Database
      const database = getDatabase(app);
      await push(dbRef(database, "products"), productData);

      alert("Product added successfully to Firebase!");

      // Reset form
      setFile(null);
      setName("");
      setPrice("");
      setStock("");
      setSizes("");
      setColors("");
      fileInputRef.current.value = null;

    } catch (err) {
      console.error(err);
      alert("Error adding product. Check console.");
    }

    setLoading(false);
  };

  return (
    <form
      onSubmit={handleUpload}
      style={{
        maxWidth: 400,
        margin: "40px auto",
        display: "flex",
        flexDirection: "column",
        gap: 12,
      }}
    >
      <h2>Add Product (Admin)</h2>

      <label>
        Product Image (required)
        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          onChange={(e) => setFile(e.target.files[0])}
          disabled={loading}
        />
      </label>

      <input
        type="text"
        placeholder="Product Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        disabled={loading}
      />
      <input
        type="number"
        step="0.01"
        placeholder="Price (e.g., 34.59)"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        required
        disabled={loading}
      />
      <input
        type="number"
        placeholder="Stock Quantity"
        value={stock}
        onChange={(e) => setStock(e.target.value)}
        required
        disabled={loading}
      />
      <input
        type="text"
        placeholder="Sizes (comma separated, e.g., 8,9,10)"
        value={sizes}
        onChange={(e) => setSizes(e.target.value)}
        disabled={loading}
      />
      <input
        type="text"
        placeholder="Colors (comma separated hex codes, e.g., #000000,#FF0000)"
        value={colors}
        onChange={(e) => setColors(e.target.value)}
        disabled={loading}
      />

      <button type="submit" disabled={loading}>
        {loading ? "Uploading..." : "Add Product"}
      </button>
    </form>
  );
}