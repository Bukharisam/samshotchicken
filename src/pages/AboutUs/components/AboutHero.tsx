import "./AboutHero.css";

const AboutHero = () => {
  return (
    <div className="about-hero">
      <div className="about-hero-left">
        <h1 className="about-title">The story behind the heat</h1>

        <p className="about-lead">
          Sam's Hot Chicken was built on one simple idea, Hot chicken should hit
          hard on flavor, not just spice.
        </p>

        <p>
          Inspired by Nashville-style heat and rooted in Queens culture, we set
          out to create a halal hot chicken experience that feels bold,
          craveable, and consistent every single time.
        </p>

        <p>
          From the crunch of the breading to the balance of our house seasoning,
          every detail is designed to deliver that perfect bite, juicy
          tenderized chicken, real spice levels, and sauce that actually tastes
          as good as it burns.
        </p>

        <p>
          Whether you go mild or insane, our goal stays the same: fresh,
          flavorful hot chicken made right.
        </p>

        <div className="about-badges">
          <span className="about-badge">100% Halal</span>
          <span className="about-badge">Cooked Fresh</span>
          <span className="about-badge">Mild to Insane</span>
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
  );
};

export default AboutHero;
