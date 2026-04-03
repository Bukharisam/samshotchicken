import "./CareerContent.css";
import CareerHero from "./CareerHero";
import OpenPositions from "./OpenPositions";
import CareerInfoPanels from "./CareerInfoPanels";
import CareerCtaBanner from "./CareerCtaBanner";

const CareerContent = () => {
  return (
    <section className="career-page">
      <div className="career-inner">
        <CareerHero />
        <OpenPositions />
        <CareerInfoPanels />
        <CareerCtaBanner />
      </div>
    </section>
  );
};

export default CareerContent;
