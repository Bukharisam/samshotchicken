import "./Footer.css";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-brand">
          <img
            src="/logo.jpeg"
            alt="Sam's Hot Chicken logo"
            className="footer-logo"
          />
          <h2>
            Sam's <span>Hot</span> Chicken
          </h2>
        </div>

        <div className="ordering-options">
          <h3> Order Options: </h3>
          <div className="two-by-two-grid">
            <p> DoorDash </p>
            <p> Uber Eats </p>
            <p> Grubhub </p>
          </div>
        </div>

        <div className="contact-info">
          <h3> Contact Us: </h3>
          <p>Phone: (000) 000-0000</p>
          <p>Email: info@samshotchicken.com</p>
          <p>Call the number for catering.</p>
          <p>Cash only business.</p>
        </div>

        <div className="footer-links">
          <h3>Links:</h3>
          <div className="two-by-two-grid">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/menu">Menu</NavLink>
            <NavLink to="/catering">Catering</NavLink>
            <NavLink to="/about">About Us</NavLink>
            <NavLink to="/career">Career</NavLink>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="footer-catchphrase">Hot. Crispy. Always worth it.</p>
        <p className="footer-legal">
          © {new Date().getFullYear()} Sam's Hot Chicken. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
