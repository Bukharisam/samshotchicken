import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../../lib/supabase";
import useCartStore from "../../../store/cartStore";

// ── Data Fetching ─────────────────────────────────────────────────────────────

const getFeaturedProducts = async () => {
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .eq("isFeatured", true);

  if (error) throw error;

  return data ?? [];
};

// ── Component ─────────────────────────────────────────────────────────────────

const HomeFeaturedItemsSection = () => {
  const navigate = useNavigate();
  const [lastAddedProductId, setLastAddedProductId] = useState("");
  const addToCart = useCartStore((state) => state.addToCart);

  const showAddSuccess = (productId: number | string) => {
    setLastAddedProductId(String(productId));
    window.setTimeout(() => {
      setLastAddedProductId("");
    }, 1500);
  };

  const {
    data = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["featuredProducts"],
    queryFn: getFeaturedProducts,
  });

  // Loading / Error / Empty states

  if (isLoading)
    return <p className="featured-status">Loading featured items...</p>;
  if (isError)
    return <p className="featured-status">Could not load featured items.</p>;
  if (!data.length)
    return <p className="featured-status">No featured items right now.</p>;

  // Render

  return (
    <>
      {/* Header row — title + "View Full Menu" button */}
      <div className="featured-items-header">
        <h3 className="featured-items-title">Featured Items</h3>
        <button
          className="featured-items-button"
          type="button"
          onClick={() => navigate("/menu")}
        >
          View Full Menu
        </button>
      </div>

      {/* Product grid */}
      <div className="featured-items-parent">
        {data.map((product) => (
          <article key={product.id} className="featured-item-card">
            <img
              className="featured-item-image"
              src={product.image}
              alt={product.name}
              loading="lazy"
            />

            <div className="featured-item-content">
              {/* Name + price row */}
              <div className="featured-item-row">
                <h4 className="featured-item-name">{product.name}</h4>
                <p className="featured-item-price">{product.price}</p>
              </div>

              {/* Cart actions */}
              <div className="featured-item-cart-actions">
                <button
                  className="featured-item-cart-button featured-item-cart-button-add"
                  type="button"
                  onClick={() => {
                    addToCart({
                      id: product.id,
                      name: product.name,
                      price: product.price,
                      image: product.image,
                    });
                    showAddSuccess(product.id);
                  }}
                >
                  Add to Cart
                </button>
                {lastAddedProductId === String(product.id) && (
                  <p className="featured-add-success">
                    Success! Added to cart.
                  </p>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </>
  );
};

export default HomeFeaturedItemsSection;
