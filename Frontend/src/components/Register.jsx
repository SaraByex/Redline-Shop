import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import { styles } from "./Styles";

export default function Register() {
  const { register } = useAuth();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleRegister = async () => {
    setError("");
    if (!name || !email || !password) {
      setError("All fields are required");
      return;
    }
    await register(name, email, password);
    navigate("/shop");
  };

  return (
    <div style={styles.formContainer}>
      <h2>Create an Account</h2>

      <input
        type="text"
        placeholder="Full Name"
        value={name}
        onChange={e => setName(e.target.value)}
      />

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />

      {error && <p style={{ color: "red" }}>{error}</p>}

      <button onClick={handleRegister} style={styles.buttonPrimary}>
        Sign Up
      </button>

      <p style={{ fontSize: 14 }}>
        Already have an account?{" "}
        <Link to="/login" style={styles.linkPrimary}>
          Log in here
        </Link>
      </p>
    </div>
  );
}