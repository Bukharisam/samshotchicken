import "./Career.css";

const Career = () => {
  return (
    <section className="career-page">
      <div className="career-inner">
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

        <div className="career-section-header">
          <h2>Open Positions</h2>
          <p>Static listing for now — submit your resume and preferred role.</p>
        </div>

        <div className="career-roles-grid">
          <article className="career-role-card">
            <h3>Front Counter Crew</h3>
            <p>
              Guest service, order accuracy, and fast-paced front-of-house
              support.
            </p>
            <div className="career-role-meta">
              <span>Part-Time / Full-Time</span>
              <span>Queens, NY</span>
            </div>
          </article>

          <article className="career-role-card">
            <h3>Line Cook</h3>
            <p>
              Prep and execute menu items with consistency, speed, and quality.
            </p>
            <div className="career-role-meta">
              <span>Full-Time</span>
              <span>Queens, NY</span>
            </div>
          </article>

          <article className="career-role-card">
            <h3>Prep Team Member</h3>
            <p>
              Handle marination, breading station prep, and kitchen
              organization.
            </p>
            <div className="career-role-meta">
              <span>Part-Time</span>
              <span>Queens, NY</span>
            </div>
          </article>

          <article className="career-role-card">
            <h3>Shift Lead</h3>
            <p>
              Support operations, coach teammates, and maintain service
              standards.
            </p>
            <div className="career-role-meta">
              <span>Full-Time</span>
              <span>Queens, NY</span>
            </div>
          </article>
        </div>

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

        <div className="career-cta-banner">
          <p className="career-cta-title">Ready to join the team?</p>
          <p className="career-cta-subtitle">
            Include your availability, preferred position, and any restaurant
            experience.
          </p>
          <div className="career-cta-actions">
            <a
              className="career-cta-button"
              href="mailto:info@samshotchicken.com"
            >
              Apply Now
            </a>
            <a className="career-cta-phone" href="tel:+13476775503">
              (347) 677-5503
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Career;