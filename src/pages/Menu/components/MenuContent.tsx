import "./MenuContent.css";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "../../../lib/supabase";
import MenuFaqSection from "./MenuFaqSection";
import useCartStore from "../../../store/cartStore";

const spiceLevels = [
  "Plain",
  "Light Mild",
  "Mild",
  "Medium",
  "Medium Hot",
  "Hot",
  "Extra Hot",
  "Reaper",
];

const getAllProducts = async () => {
  const { data, error } = await supabase
    .from("products")
    .select("*, categories(name)");

  if (error) throw error;
  return data ?? [];
};

const MenuContent = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [spiceSelections, setSpiceSelections] = useState<
    Record<string, string>
  >({});
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
    queryKey: ["allProducts"],
    queryFn: getAllProducts,
  });

  if (isLoading) return <p className="menu-status">Loading menu...</p>;
  if (isError) return <p className="menu-status">Could not load menu.</p>;

  const grouped = data.reduce((acc, product) => {
    let category = product.categories?.name ?? "Other";
    const normalizedName = String(product.name ?? "")
      .toLowerCase()
      .trim()
      .replace(/\s+/g, " ");

    if (/^single\s+(tender|tenders|slider|sliders)$/.test(normalizedName)) {
      category = "Sides";
    }

    if (!acc[category]) acc[category] = [];
    acc[category].push(product);
    return acc;
  }, {});

  const orderedGroups = Object.entries(grouped).sort(
    ([leftCategory], [rightCategory]) => {
      if (String(leftCategory).toLowerCase() === "combos") return -1;
      if (String(rightCategory).toLowerCase() === "combos") return 1;
      return 0;
    },
  );

  const visibleGroups = orderedGroups.filter(([category]) => {
    if (activeFilter === "All") return true;
    return String(category).toLowerCase() === activeFilter.toLowerCase();
  });

  const searchedGroups = visibleGroups
    .map(([category, products]) => {
      const safeProducts = Array.isArray(products) ? products : [];
      const filteredProducts = safeProducts.filter((product) =>
        String(product.name ?? "")
          .toLowerCase()
          .includes(searchTerm.toLowerCase().trim()),
      );

      return { category, products: filteredProducts };
    })
    .filter((group) => group.products.length > 0);

  return (
    <div className="menu-page">
      <div className="menu-header">
        <p className="menu-kicker">Hot Chicken Kitchen</p>
        <h1 className="menu-title">
          Our <span>Menu</span>
        </h1>
        <p className="menu-subtitle">
          100% Halal · Nashville-style · Queens, NY
        </p>
      </div>

      <div className="menu-controls">
        <div className="menu-search-bar">
          <label className="menu-visually-hidden" htmlFor="menu-search">
            Search menu
          </label>
          <span className="menu-search-icon">⌕</span>
          <input
            id="menu-search"
            className="menu-search-input"
            type="text"
            placeholder="Search the menu..."
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
          />
        </div>

        <div
          className="menu-filter-bar"
          role="toolbar"
          aria-label="Menu categories"
        >
          <button
            className={`menu-filter-btn ${activeFilter === "All" ? "menu-filter-btn--active" : ""}`}
            type="button"
            onClick={() => {
              setActiveFilter("All");
              setSearchTerm("");
            }}
          >
            All
          </button>
          <button
            className={`menu-filter-btn ${activeFilter === "Combos" ? "menu-filter-btn--active" : ""}`}
            type="button"
            onClick={() => {
              setActiveFilter("Combos");
              setSearchTerm("");
            }}
          >
            Combos
          </button>
          <button
            className={`menu-filter-btn ${activeFilter === "Sides" ? "menu-filter-btn--active" : ""}`}
            type="button"
            onClick={() => {
              setActiveFilter("Sides");
              setSearchTerm("");
            }}
          >
            Sides
          </button>
          <button
            className={`menu-filter-btn ${activeFilter === "Drinks" ? "menu-filter-btn--active" : ""}`}
            type="button"
            onClick={() => {
              setActiveFilter("Drinks");
              setSearchTerm("");
            }}
          >
            Drinks
          </button>
        </div>
      </div>

      <hr className="menu-divider" />

      {searchedGroups.map(({ category, products }) => {
        const safeProducts = Array.isArray(products) ? products : [];
        let displayProducts = safeProducts;
        const normalizedCategory = String(category).toLowerCase();
        const shouldShowSpiceSelector =
          normalizedCategory === "combos" ||
          normalizedCategory === "sliders" ||
          normalizedCategory === "tenders";

        if (normalizedCategory === "combos") {
          const comboItems = safeProducts.slice();
          const wrapIndex = comboItems.findIndex((item) =>
            String(item.name ?? "")
              .toLowerCase()
              .includes("wrap"),
          );
          const slidersIndex = comboItems.findIndex(
            (item) =>
              String(item.name ?? "")
                .toLowerCase()
                .trim()
                .replace(/\s+/g, " ") === "2 sliders n side",
          );

          if (
            wrapIndex !== -1 &&
            slidersIndex !== -1 &&
            slidersIndex !== wrapIndex + 1
          ) {
            const [slidersItem] = comboItems.splice(slidersIndex, 1);
            comboItems.splice(wrapIndex + 1, 0, slidersItem);
          }

          displayProducts = comboItems;
        }

        return (
          <div className="menu-section" key={category}>
            <div className="menu-section-head">
              <p className="menu-category-label">{category}</p>
              <span className="menu-section-line" />
            </div>
            <div className="menu-grid">
              {displayProducts.map((product) => (
                <article key={product.id} className="menu-card">
                  <div className="menu-card-media">
                    <img
                      className="menu-card-img"
                      src={product.image}
                      alt={product.name}
                      loading="lazy"
                    />
                  </div>
                  <div className="menu-card-body">
                    <div className="menu-card-row">
                      <h4 className="menu-card-name">{product.name}</h4>
                      <span className="menu-card-price">{product.price}</span>
                    </div>
                    {shouldShowSpiceSelector && (
                      <div className="menu-spice-wrapper">
                        <label
                          className="menu-spice-label"
                          htmlFor={`spice-${product.id}`}
                        >
                          Spice Level
                        </label>
                        <select
                          id={`spice-${product.id}`}
                          className="menu-spice-select"
                          value={
                            spiceSelections[String(product.id)] ??
                            spiceLevels[0]
                          }
                          onChange={(event) =>
                            setSpiceSelections((previousSelections) => ({
                              ...previousSelections,
                              [String(product.id)]: event.target.value,
                            }))
                          }
                        >
                          {spiceLevels.map((level) => (
                            <option key={level} value={level}>
                              {level}
                            </option>
                          ))}
                        </select>
                      </div>
                    )}
                    <button
                      className="menu-card-btn"
                      type="button"
                      onClick={() => {
                        addToCart({
                          id: product.id,
                          name: product.name,
                          price: product.price,
                          image: product.image,
                          spiceLevel: shouldShowSpiceSelector
                            ? (spiceSelections[String(product.id)] ??
                              spiceLevels[0])
                            : undefined,
                        });
                        showAddSuccess(product.id);
                      }}
                    >
                      Add to Cart
                    </button>
                    {lastAddedProductId === String(product.id) && (
                      <p className="menu-add-success">
                        Success! Added to cart.
                      </p>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        );
      })}

      <MenuFaqSection />
    </div>
  );
};

export default MenuContent;
