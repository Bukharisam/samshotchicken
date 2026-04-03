import "./CareerHero.css";

const CareerHero = () => {
  return (
    <div className="career-hero">
      <div className="career-hero-content">
        <p className="career-kicker">Careers at Sam&apos;s Hot Chicken</p>
        <h1 className="career-title">Bring the heat with us.</h1>

        <p className="career-lead">
          We&apos;re building a team that moves fast, stays consistent, and
          takes pride in every order. If you&apos;re dependable, energetic,
          and customer-focused, we want to hear from you.
        </p>

        <div className="career-badges">
          <span className="career-badge">Competitive Pay</span>
          <span className="career-badge">Flexible Scheduling</span>
          <span className="career-badge">Growth Opportunities</span>
        </div>
      </div>

      <div className="career-hero-media">
        <img
          src="/Foodtruck.jpeg"
          alt="Sam's Hot Chicken food truck"
          className="career-hero-image"
        />
      </div>
    </div>
  );
};

export default CareerHero;
