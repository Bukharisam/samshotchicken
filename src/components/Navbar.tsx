import "./Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="left-nav-section">
        <img src="/logo.jpeg" alt="Sams Hot Chicken logo" />
        <h1>
          {" "}
          Sam's <span> Hot </span> Chicken{" "}
        </h1>
      </div>

      {/* this section will hold the links to different pages */}
      <div className="middle-nav-section">
        <NavLink to="/menu">Menu</NavLink>
        <NavLink to="/catering">Catering</NavLink>
        <NavLink to="/about">About US</NavLink>
        <NavLink to="/career">Career</NavLink>
        <NavLink to="/reviews">Reviews</NavLink>
        <NavLink to="/contact">Contacts</NavLink>
      </div>

      <div className="right-nav-section">
        <button className="cart-button"> View Cart </button>
        <button className="login-button"> Login </button>
      </div>
    </nav>
  );
};

export default Navbar;
