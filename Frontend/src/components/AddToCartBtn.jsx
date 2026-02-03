
// import { useNavigate } from "react-router-dom";
// import { useAuth } from "../context/AuthContext";

// export default function AddToCartButton({ product, addToCart }) {
//   const { user } = useAuth();
//   const navigate = useNavigate();

//   const handleAddToCart = () => {
//     if (!user) {
//       navigate("/register"); // redirect if not logged in
//       return;
//     }

//     // Call the parent/add-to-cart logic
//     addToCart(product);
//   };

//   return (
//     <button onClick={handleAddToCart}>
//       Add to Cart
//     </button>
//   );
// }