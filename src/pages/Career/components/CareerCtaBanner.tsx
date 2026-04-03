import "./CareerCtaBanner.css";

const CareerCtaBanner = () => {
  return (
    <div className="career-cta-banner">
      <p className="career-cta-title">Ready to join the team?</p>
      <p className="career-cta-subtitle">
        Include your availability, preferred position, and any restaurant
        experience.
      </p>
      <div className="career-cta-actions">
        <a className="career-cta-button" href="mailto:info@samshotchicken.com">
          Apply Now
        </a>
        <a className="career-cta-phone" href="tel:+13476775503">
          (347) 677-5503
        </a>
      </div>
    </div>
  );
};

export default CareerCtaBanner;
