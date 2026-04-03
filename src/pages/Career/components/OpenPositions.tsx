import "./OpenPositions.css";

const OpenPositions = () => {
  return (
    <>
      <div className="career-section-header">
        <h2>Open Positions</h2>
        <p>Static listing for now - submit your resume and preferred role.</p>
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
    </>
  );
};

export default OpenPositions;
