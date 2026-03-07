import "./AboutUs.css";
import { NavLink } from "react-router-dom";

const AboutUs = () => {
  return (
    <section className="about">
      <div className="about-inner">
        {/* HERO: left text, right featured image */}
        <div className="about-hero">
          <div className="about-hero-left">
            <h1 className="about-title">The story behind the heat</h1>

            <p className="about-lead">
              Sam's Hot Chicken was built on one simple idea, Hot chicken
              should hit hard on flavor, not just spice.
            </p>

            <p>
              Inspired by Nashville-style heat and rooted in Queens culture, we
              set out to create a halal hot chicken experience that feels bold,
              craveable, and consistent every single time.
            </p>

            <p>
              From the crunch of the breading to the balance of our house
              seasoning, every detail is designed to deliver that perfect bite,
              juicy tenderized chicken, real spice levels, and sauce that actually tastes
              as good as it burns.
            </p>

            <p>
              Whether you go mild or insane, our goal stays the same: fresh,
              flavorful hot chicken made right.
            </p>

            <div className="about-badges">
              <span className="about-badge">100% Halal</span>
              <span className="about-badge">Cooked Fresh</span>
              <span className="about-badge">Mild → Insane</span>
            </div>
          </div>

          <div className="about-hero-right">
            <img
              className="about-feature"
              src="/Foodtruck.jpeg"
              alt="Sam's Hot Chicken food truck"
            />
          </div>
        </div>

        {/* MAP + HOURS */}
        <div className="about-loc">
          <div className="about-card">
            <h2 className="about-section-title">Visit Us</h2>

            <div className="about-row">
              <div className="about-label">Location</div>
              <div className="about-value">Hillside Ave, Queens NY</div>
            </div>

            <div className="about-row">
              <div className="about-label">Hours</div>
              <div className="about-value">
                Mon–Thu: 12pm – 10pm <br />
                Fri–Sat: 12pm – 12am <br />
                Sun: 12pm – 9pm
              </div>
            </div>

            <div className="about-actions">
              <a className="about-btn primary" href="#">
                Get Directions
              </a>
              <a className="about-btn ghost" href="#">
                Contact
              </a>
            </div>
          </div>

          <div className="about-card map">
            <iframe
              src="https://maps.google.com/maps?q=257-03+Hillside+Ave,+Queens,+NY+11004&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "260px", display: "block" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        <div className="about-location-banner">
          <p>COME FIND US ON HILLSIDE AVE</p>
          <p className="about-location-address">
            257-03 Hillside Ave, Queens, NY 11004
          </p>
          <NavLink to="/menu" className="about-location-button">
            View Full Menu
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
