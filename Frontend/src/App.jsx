import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Catalogue from "./components/Catalogue";
import Cart from "./components/Cart";
import Login from "./components/Login";
import Register from "./components/Register";
import AddProduct from "./components/AddProduct";
import Shop from "./components/Shop";
import { useAuth } from "./context/AuthContext";

function AdminRoute({ children }) {
  const { user } = useAuth();
  const isAdmin = user?.email === "sarabukulu@gmail.com";
  return isAdmin ? children : <Navigate to="/login" replace />;
}

export default function App() {
  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Catalogue />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/admin/add-product"
          element={
            <AdminRoute>
              <AddProduct />
            </AdminRoute>
          }
        />
        <Route path="*" element={<h2>Page Not Found</h2>} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}