import "./Home.css";

const Home = () => {
  return (
    <div className="hero-section">
      <div className="hero-left-content">
        <div className="hero-buttons">
          <button> Hillside Ave, Queens NY </button>
          <button> Nashville Style Seasoning </button>
          <button> 4.9 ⭐ Ratings </button>
        </div>
        <div className="hero-text-highlight">
          <h2 className="hero-text-title"> NYC'S Hottest</h2>
          <p className="hero-text-subtitle"> Chicken Spot </p>
          <p>
            Crispy, juicy, and 100% Halal Nashville-style hot chicken made fresh
            daily in <br /> the heart of Queens. Pick your heat level from mild
            to insane!
          </p>
        </div>
      </div>
      <HeroRight />
    </div>
  );
};

const HeroRight = () => {
  return (
    <div className="hero-right-container">
      <img className="hero-right-image" src="/images/splash.png" alt="Hero" />
      <img
        className="hero-right-food-image"
        src="/images/Fiery-chicken.webp"
        alt="Food"
      />
    </div>
  );
};

const FeaturedItems = () => {
  return (
    <>
    <p> Hello </p>
    </>
  )
};

export default Home;
