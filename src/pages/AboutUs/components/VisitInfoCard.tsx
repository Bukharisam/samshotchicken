import "./AboutShared.css";
import "./VisitInfoCard.css";

const VisitInfoCard = () => {
  return (
    <div className="about-card">
      <h2 className="about-section-title">Visit Us</h2>

      <div className="about-row">
        <div className="about-label">Location</div>
        <div className="about-value">Hillside Ave, Queens NY</div>
      </div>

      <div className="about-row">
        <div className="about-label">Hours</div>
        <div className="about-value">
          Mon-Thu: 12pm - 10pm <br />
          Fri-Sat: 12pm - 12am <br />
          Sun: 12pm - 9pm
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
  );
};

export default VisitInfoCard;
