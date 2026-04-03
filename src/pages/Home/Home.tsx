import "./Home.css";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "../../lib/supabase";

type FeaturedProduct = {
  id: number;
  name: string;
  price: string;
  image: string;
  isFeatured: boolean;
  category_id: number | null;
  spice_level_id: number | null;
};

const Home = () => {
  return (
    <>
      <div className="hero-section">
        <div className="hero-left-content">
          <div className="hero-buttons">
            <button>Hillside Ave, Queens NY</button>
            <button>Nashville Style Seasoning</button>
            <button>4.9 ⭐ Ratings</button>
          </div>
          <div className="hero-text-highlight">
            <h2 className="hero-text-title">NYC'S Hottest</h2>
            <p className="hero-text-subtitle">Chicken Spot</p>
            <p>
              Crispy, juicy, and 100% Halal Nashville-style hot chicken made
              fresh daily in <br /> the heart of Queens. Pick your heat level
              from mild to insane!
            </p>
          </div>
        </div>
        <HeroRight />
      </div>
      <FeaturedItems />
      <Reviews />
      <Operations />
    </>
  );
};

// ============================================================

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

// ============================================================

// Fetches featured products from Supabase.
// this comes first before the component.
const getFeaturedProducts = async (): Promise<FeaturedProduct[]> => {
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .eq("isFeatured", true);

  if (error) throw error;
  return data ?? [];
};

// Fetches featured products from Supabase and displays them as cards.
const FeaturedItems = () => {
  const [cartItems, setCartItems] = useState<number[]>([]);

  const {
    data = [],
    isLoading,
    isError,
  } = useQuery<FeaturedProduct[]>({
    queryKey: ["featuredProducts"],
    queryFn: getFeaturedProducts,
  });

  const addToCart = (productId: number) => {
    setCartItems((currentCart) =>
      currentCart.includes(productId)
        ? currentCart
        : [...currentCart, productId],
    );
  };

  if (isLoading)
    return <p className="featured-status">Loading featured items...</p>;
  if (isError)
    return <p className="featured-status">Could not load featured items.</p>;
  if (!data.length)
    return <p className="featured-status">No featured items right now.</p>;

  return (
    <>
      <div className="featured-items-header">
        <h3 className="featured-items-title">Featured Items</h3>
        <button className="featured-items-button">View Full Menu</button>
      </div>
      <div className="featured-items-parent">
        {data.map((product) => {
          const isInCart = cartItems.includes(product.id);

          return (
            <article key={product.id} className="featured-item-card">
              <img
                className="featured-item-image"
                src={product.image}
                alt={product.name}
                loading="lazy"
              />
              <div className="featured-item-content">
                <div className="featured-item-row">
                  <h4 className="featured-item-name">{product.name}</h4>
                  <p className="featured-item-price">{product.price}</p>
                </div>
                <div className="featured-item-cart-actions">
                  <button
                    className="featured-item-cart-button featured-item-cart-button-add"
                    onClick={() => addToCart(product.id)}
                    type="button"
                    disabled={isInCart}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </>
  );
};

// ============================================================

const Reviews = () => {
  return (
    <section className="reviews-section">
      <h3 className="reviews-title">What Our Customers Are Saying</h3>
    </section>
  );
};

// ============================================================

const Operations = () => {
  return (
    <section className="operations-section">
      <h3 className="operations-title">Our Operations</h3>
    </section>
  );
};

export default Home;
