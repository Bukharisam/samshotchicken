import "./Footer.css";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section footer-left">
        <div className="footer-brand">
          <img src="/logo.jpeg" alt="Sam's Hot Chicken logo" className="footer-logo" />
          <div className="footer-brand-content">
            <h2 className="footer-brand-name">
              Sam's <span className="footer-hot">Hot</span> Chicken
            </h2>
            <p className="footer-catchphrase">Hot. Crispy. Always worth it.</p>
          </div>
        </div>
      </div>
      <div className="footer-section footer-middle">
        <div className="footer-columns">
          <div className="footer-column">
            <h3 className="footer-column-heading">Socials</h3>
            <div className="footer-socials-list">
              <a
                href="https://www.instagram.com/samshotchickenog"
                target="_blank"
                rel="noreferrer"
                className="footer-social-item"
              >
                <img
                  src="/Instagram.svg"
                  alt="Instagram"
                  className="footer-social-icon"
                />
                <span>@samshotchickenog</span>
              </a>
              <a
                href="https://www.facebook.com/samshotchickenog"
                target="_blank"
                rel="noreferrer"
                className="footer-social-item"
              >
                <img
                  src="/facebook-svgrepo-com.svg"
                  alt="Facebook"
                  className="footer-social-icon"
                />
                <span>@samshotchickenog</span>
              </a>
              <div className="footer-social-item">
                <img
                  src="/images/icons8-twitter-50.png"
                  alt="Twitter"
                  className="footer-social-icon footer-social-icon-twitter"
                />
                <span>sasmhotchciken</span>
              </div>
            </div>
          </div>
          <div className="footer-column">
            <h3 className="footer-column-heading">Contact</h3>
            <div className="footer-socials-list">
              <a
                href="mailto:info@samshotchicken.com"
                className="footer-social-item"
              >
                <img
                  src="/gmail-svgrepo-com.svg"
                  alt="Gmail"
                  className="footer-social-icon"
                />
                <span>info@samshotchicken.com</span>
              </a>
              <a href="tel:+13476775503" className="footer-social-item">
                <img
                  src="/phone-svgrepo-com.svg"
                  alt="Phone"
                  className="footer-social-icon"
                />
                <span>(347) 677-5503</span>
              </a>
            </div>
          </div>
          <div className="footer-column">
            <h3 className="footer-column-heading">Catering</h3>
            <div className="footer-catering-text">
              <p>Call us for any inquiries.</p>
              <p>Cash only business.</p>
            </div>
          </div>
          <div className="footer-column">
            <h3 className="footer-column-heading">Quick Access</h3>
            <div className="footer-quick-links">
              <NavLink to="/" className="footer-quick-link">
                Home
              </NavLink>
              <NavLink to="/menu" className="footer-quick-link">
                Menu
              </NavLink>
              <NavLink to="/catering" className="footer-quick-link">
                Catering
              </NavLink>
              <NavLink to="/about" className="footer-quick-link">
                About Us
              </NavLink>
              <NavLink to="/career" className="footer-quick-link">
                Career
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-section footer-right">
        <div className="footer-inquiry-box">
          <div className="footer-inquiry-header">
            <img
              src="/logo.jpeg"
              alt="Sam's Hot Chicken logo"
              className="footer-social-icon footer-inquiry-logo"
            />
            <p>Any inquiries leave us a message</p>
          </div>
          <input
            type="text"
            className="footer-message-input"
            placeholder="Write your message here"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
