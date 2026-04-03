import "./CareerInfoPanels.css";

const CareerInfoPanels = () => {
  return (
    <div className="career-info-grid">
      <div className="career-panel">
        <h3>Why Work With Us</h3>
        <ul>
          <li>Team-focused culture with clear standards</li>
          <li>Hands-on training from day one</li>
          <li>Room to grow into leadership roles</li>
          <li>Employee meal discounts during shifts</li>
        </ul>
      </div>

      <div className="career-panel">
        <h3>Hiring Process</h3>
        <ol>
          <li>Send your resume to info@samshotchicken.com</li>
          <li>Quick phone or in-person screening</li>
          <li>Paid trial shift (role-dependent)</li>
          <li>Offer and onboarding</li>
        </ol>
      </div>
    </div>
  );
};

export default CareerInfoPanels;
