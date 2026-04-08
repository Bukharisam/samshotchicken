import "./Home.css";
import HomeFeaturedItemsSection from "./components/HomeFeaturedItemsSection";
import HomeFaqSection from "./components/HomeFaqSection";
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
      <HomeFaqSection />
    </>
  );
};

export default Home;
