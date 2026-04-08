import "./Navbar.css";
import { NavLink, useNavigate } from "react-router-dom";
import useCartStore from "../store/cartStore";
import useAuthStore from "../store/authStore";

const Navbar = () => {
  const cartItems = useCartStore((state) => state.cartItems);
  const openCart = useCartStore((state) => state.openCart);
  const role = useAuthStore((state) => state.role);
  const email = useAuthStore((state) => state.email);
  const navigate = useNavigate();

  const totalItemCount = cartItems.reduce(
    (sum, item) => sum + item.quantity,
    0,
  );

  const avatarLabel = email ? email[0].toUpperCase() : "G";

  const handleLogout = () => {
    localStorage.removeItem("auth_role");
    localStorage.removeItem("auth_email");
    localStorage.removeItem("auth_name");
    useAuthStore.setState({ role: null, email: null, name: null });
    navigate("/");
  };

  return (
    <div className="navbar-wrapper">
      {role === "admin" && (
        <div className="admin-banner">
          <NavLink to="/dashboard" className="admin-banner-link">
            View Dashboard →
          </NavLink>
        </div>
      )}

      <nav className="nav">
        <NavLink to="/" className="brand-link">
          <div className="left-nav-section">
            <img src="/logo.jpeg" alt="Sams Hot Chicken logo" />
            <h1>
              {" "}
              Sam's <span> Hot </span> Chicken{" "}
            </h1>
          </div>
        </NavLink>

        {/* this section will hold the links to different pages */}
        <div className="middle-nav-section">
          <NavLink to="/menu">Menu</NavLink>
          <NavLink to="/about">About US</NavLink>
          <NavLink to="/career">Career</NavLink>
        </div>

        <div className="right-nav-section">
          <button className="cart-button" type="button" onClick={openCart}>
            View Cart
            {totalItemCount > 0 && (
              <span className="cart-count-badge">{totalItemCount}</span>
            )}
          </button>

          {role ? (
            <>
              <div className="nav-avatar" title={email ?? ""}>
                {avatarLabel}
              </div>
              <button
                className="logout-button"
                type="button"
                onClick={handleLogout}
              >
                Logout
              </button>
            </>
          ) : (
            <NavLink to="/login" className="login-button">
              Login
            </NavLink>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
