import "./Home.css";
import HomeFeaturedItemsSection from "./components/HomeFeaturedItemsSection";
import HomeHeroSection from "./components/HomeHeroSection";
import HomeOperationsSection from "./components/HomeOperationsSection";
import HomeReviewsSection from "./components/HomeReviewsSection";

const Home = () => {
  return (
    <>
      <HomeHeroSection />
      <HomeFeaturedItemsSection />
      <HomeReviewsSection />
      <HomeOperationsSection />
    </>
  );
};

export default Home;
