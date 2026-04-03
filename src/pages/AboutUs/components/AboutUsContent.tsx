import "./AboutUsContent.css";
import AboutHero from "./AboutHero";
import VisitInfoCard from "./VisitInfoCard";
import AboutMap from "./AboutMap";
import LocationBanner from "./LocationBanner";

const AboutUsContent = () => {
  return (
    <section className="about">
      <div className="about-inner">
        <AboutHero />

        <div className="about-loc">
          <VisitInfoCard />
          <AboutMap />
        </div>

        <LocationBanner />
      </div>
    </section>
  );
};

export default AboutUsContent;
