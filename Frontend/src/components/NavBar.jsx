import { NavLink } from "react-router-dom";
import { styles, colors, responsive, breakpoints } from "./Styles";
import { useAuth } from "../context/AuthContext";
import { getAuth, signOut } from "firebase/auth";
import { app } from "../firebase";

export default function NavBar() {
  const { user } = useAuth();
  const isAdmin = user?.email === "sarabukulu@gmail.com";
  const isMobile = window.innerWidth <= breakpoints.mobile;

  const navLinkStyle = ({ isActive }) => ({
    ...styles.linkPrimary,           // base link style
    color: isActive ? colors.primary : styles.linkPrimary.color
  });

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "12px 20px",
        ...(isMobile ? responsive.navMobile : responsive.navDesktop)
      }}
    >
      {/* Links */}
      <div
        style={{
          display: "flex",
          gap: 24,
          ...(isMobile ? responsive.navLinksMobile : responsive.navLinksDesktop)
        }}
      >
        <NavLink to="/" style={navLinkStyle}>Home</NavLink>
        <NavLink to="/shop" style={navLinkStyle}>Shop</NavLink>
        {isAdmin && (
          <NavLink to="/admin/add-product" style={navLinkStyle}>
            Add Product
          </NavLink>
        )}
      </div>

      {/* User */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 12,
          ...(isMobile ? responsive.navUserMobile : responsive.navUserDesktop)
        }}
      >
        {user ? (
          <>
            <span style={{ color: colors.textLight }}>
              Hello {user.displayName
                ? user.displayName.charAt(0).toUpperCase() + user.displayName.slice(1)
                : user.email}
            </span>
            <button onClick={() => signOut(getAuth(app))} style={styles.buttonPrimary}>
              Logout
            </button>
          </>
        ) : (
          <>
            <NavLink to="/login" style={navLinkStyle}>Login</NavLink>
            <NavLink to="/register" style={styles.buttonPrimary}>Register</NavLink>
          </>
        )}
      </div>
    </nav>
  );
}