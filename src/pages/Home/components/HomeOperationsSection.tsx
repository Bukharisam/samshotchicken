const HomeOperationsSection = () => {
  return (
    <section className="operations-section">
      <div className="operations-divider">
        <span>Operations</span>
      </div>
      <div className="operations-inner">
        <div className="operations-card">
          <div className="operations-card-icon">HRS</div>
          <h4 className="operations-card-title">Hours</h4>
          <ul className="operations-hours-list">
            <li>
              <span>Mon - Thu</span>
              <span>5:00 PM - 2:00 AM</span>
            </li>
            <li>
              <span>Fri - Sat</span>
              <span>5:00 PM - 3:00 AM</span>
            </li>
            <li>
              <span>Sunday</span>
              <span>5:00 PM - 2:00 AM</span>
            </li>
          </ul>
        </div>

        <div className="operations-card operations-card-location">
          <div
            className="operations-card-icon operations-card-icon-map"
            aria-hidden="true"
          >
            <svg viewBox="0 0 24 24" role="presentation" focusable="false">
              <path d="M12 22s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12Z" />
              <circle cx="12" cy="10" r="2.8" />
            </svg>
          </div>
          <h4 className="operations-card-title">Location</h4>
          <div className="operations-location-content">
            <div className="operations-location-text">
              <p className="operations-card-text">257-19 Hillside Ave</p>
              <p className="operations-card-text">Queens, NY 11004</p>
              <a
                className="operations-directions-link"
                href="https://maps.google.com/?q=257-19+Hillside+Ave+Queens+NY+11004"
                target="_blank"
                rel="noreferrer"
              >
                Get Directions &rarr;
              </a>
            </div>
            <div className="operations-map-embed">
              <iframe
                src="https://maps.google.com/maps?q=257-19+Hillside+Ave,+Queens,+NY+11004&output=embed"
                title="Sam's Hot Chicken location map"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>

        <div className="operations-card operations-card-contact">
          <div className="operations-card-icon">CALL</div>
          <h4 className="operations-card-title">Contact</h4>
          <div className="operations-contact-content">
            <div className="operations-contact-text">
              <p className="operations-card-text">(347) 677-5503</p>
              <p className="operations-card-text">@samshotchickenog</p>
              <p className="operations-card-badge">HMS Certified Halal</p>
            </div>
            <div className="operations-truck-visual">
              <img
                className="operations-truck-image"
                src="/Foodtruck.jpeg"
                alt="Sam's Hot Chicken food truck"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeOperationsSection;
