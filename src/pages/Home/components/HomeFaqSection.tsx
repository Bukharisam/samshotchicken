import "./HomeFaqSection.css";

const faqItems = [
  {
    question: "Do you offer online ordering?",
    answer:
      "Yes. You can place pickup and delivery orders through our online menu during business hours.",
  },
  {
    question: "Is all the food halal?",
    answer:
      "Yes, all of our chicken is 100% halal and prepared fresh with our signature seasoning.",
  },
  {
    question: "Can I choose spice level?",
    answer:
      "Absolutely. You can choose your heat level from mild to extra hot on most chicken items.",
  },
  {
    question: "Do you cater for events?",
    answer:
      "Yes, we offer catering trays for family gatherings, parties, and office events. Contact us for details.",
  },
];

const HomeFaqSection = () => {
  return (
    <section className="home-faq" aria-label="Frequently asked questions">
      <div className="home-faq__inner">
        <p className="home-faq__eyebrow">Need Help?</p>
        <h2 className="home-faq__title">Frequently Asked Questions</h2>

        <div className="home-faq__list">
          {faqItems.map((item) => (
            <details key={item.question} className="home-faq__item">
              <summary className="home-faq__question">{item.question}</summary>
              <p className="home-faq__answer">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeFaqSection;
