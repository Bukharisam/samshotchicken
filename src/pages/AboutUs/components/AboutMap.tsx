import "./AboutShared.css";
import "./AboutMap.css";

const AboutMap = () => {
  return (
    <div className="about-card map">
      <iframe
        src="https://maps.google.com/maps?q=257-03+Hillside+Ave,+Queens,+NY+11004&output=embed"
        width="100%"
        height="100%"
        style={{ border: 0, minHeight: "260px", display: "block" }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
};

export default AboutMap;
