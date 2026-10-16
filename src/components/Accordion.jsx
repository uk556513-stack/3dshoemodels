import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const defaultItems = [
  {
    title: "How do I choose the right shoe size?",
    content:
      "Check the available sizes on the product details page. Choose your usual UK shoe size before adding the product to your cart.",
  },
  {
    title: "How can I track my order?",
    content:
      "Order tracking requires a connected order management system. This demo website does not yet have a live tracking system.",
  },
  {
    title: "What is your return policy?",
    content:
      "Please confirm the return policy before purchasing. This demonstration website does not submit real return requests.",
  },
  {
    title: "Are the shoes available in different colours?",
    content:
      "Colour availability depends on the product. Additional colour variants can be configured in the product data.",
  },
];

const Accordion = ({
  items = defaultItems,
  allowMultiple = false,
}) => {
  const [openItems, setOpenItems] = useState([]);

  const toggleItem = (index) => {
    setOpenItems((previous) => {
      if (previous.includes(index)) {
        return previous.filter((item) => item !== index);
      }

      return allowMultiple ? [...previous, index] : [index];
    });
  };

  return (
    <div className="accordion-luxury">
      {items.map((item, index) => {
        const question = item.question ?? item.title;
        const answer = item.answer ?? item.content;
        const isOpen = openItems.includes(index);

        return (
          <div
            className={`accordion-item ${
              isOpen ? "accordion-item-open" : ""
            }`}
            key={`${question}-${index}`}
          >
            <button
              type="button"
              className={`accordion-question ${
                isOpen ? "accordion-question-open" : ""
              }`}
              aria-expanded={isOpen}
              onClick={() => toggleItem(index)}
            >
              <span className="accordion-number">
                {String(index + 1).padStart(2, "0")}
              </span>

              <span className="accordion-title">{question}</span>

              <ChevronDown
                size={20}
                className={`accordion-chevron ${
                  isOpen ? "accordion-chevron-open" : ""
                }`}
              />
            </button>

            {isOpen && (
              <div className="accordion-answer">
                <p>{answer}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;