import "./MenuFaqSection.css";

const faqItems = [
  {
    question: "Can I customize my order?",
    answer:
      "Yes, you can customize heat level and choose available add-ons directly from the menu items.",
  },
  {
    question: "What are your most popular items?",
    answer:
      "Our top picks are the sliders combo, loaded fries, and signature tenders.",
  },
  {
    question: "How spicy is the food?",
    answer:
      "You can choose your heat level, from mild to very spicy, on most chicken items.",
  },
  {
    question: "Do you guys do delivery?",
    answer:
      "Cash only business, but we are on Postmates, Grubhub, and DoorDash.",
  },
];

const MenuFaqSection = () => {
  return (
    <section className="menu-faq" aria-label="Menu frequently asked questions">
      <div className="menu-faq__head">
        <p className="menu-faq__eyebrow">Questions</p>
        <h2 className="menu-faq__title">Frequently Asked Questions</h2>
      </div>

      <div className="menu-faq__list">
        {faqItems.map((item) => (
          <details key={item.question} className="menu-faq__item">
            <summary className="menu-faq__question">{item.question}</summary>
            <p className="menu-faq__answer">{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
};

export default MenuFaqSection;
