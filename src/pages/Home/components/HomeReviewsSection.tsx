const reviews = [
  {
    name: "Asim A.",
    platform: "Uber Eats",
    text: "Best hot chicken in Queens, no debate. The sliders are crispy, juicy, and that sauce is insane. I order every week.",
  },
  {
    name: "Muhammad I.",
    platform: "Uber Eats",
    text: "Perfect delivery and on time. The loaded fries are something else - rich, spicy, and way more food than I expected.",
  },
  {
    name: "Zara K.",
    platform: "Google",
    text: "Finally a halal spot that actually goes hard on flavor. The spice levels are real - do not sleep on the extra hot.",
  },
  {
    name: "Tariq B.",
    platform: "Google",
    text: "Came for the first time on a Friday night. The line was worth it. Mac N Chick is a must - creamy, smoky, and filling.",
  },
  {
    name: "Nadia R.",
    platform: "Yelp",
    text: "The tenders are perfectly crispy every single time. My whole family orders from here now. Genuinely the best halal chicken spot.",
  },
  {
    name: "Bilal H.",
    platform: "Google",
    text: "Late night spot that never disappoints. Open till 3am on weekends and the food still hits like it is fresh out the kitchen.",
  },
  {
    name: "Fatima S.",
    platform: "Uber Eats",
    text: "Coleslaw is underrated here. Pairs perfectly with the heat. The combo deal is 100% worth it every time.",
  },
  {
    name: "Omar J.",
    platform: "Google",
    text: "Honestly better than Dave's. Said what I said. The sauce, the crunch, the spice - everything is on point.",
  },
];

const HomeReviewsSection = () => {
  return (
    <section className="reviews-section">
      <div className="reviews-header">
        <h3 className="reviews-title">What Our Customers Are Saying</h3>
        <p className="reviews-subtitle">Real orders. Real reactions.</p>
      </div>

      <div className="reviews-marquee-wrapper">
        <div className="reviews-marquee-track">
          {[...reviews, ...reviews].map((review, index) => (
            <article key={index} className="reviews-card">
              <div className="reviews-stars">*****</div>
              <p className="reviews-text">"{review.text}"</p>
              <div className="reviews-author">
                <div className="reviews-avatar">{review.name[0]}</div>
                <div>
                  <p className="reviews-name">{review.name}</p>
                  <p className="reviews-platform">{review.platform}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeReviewsSection;
