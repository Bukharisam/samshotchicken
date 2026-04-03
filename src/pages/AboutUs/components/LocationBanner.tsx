import { NavLink } from "react-router-dom";
import "./LocationBanner.css";

const LocationBanner = () => {
  return (
    <div className="about-location-banner">
      <p>COME FIND US ON HILLSIDE AVE</p>
      <p className="about-location-address">
        257-03 Hillside Ave, Queens, NY 11004
      </p>
      <NavLink to="/menu" className="about-location-button">
        View Full Menu
      </NavLink>
    </div>
  );
};

export default LocationBanner;
