import { FAQItem } from "./FAQItem"
import { faq } from "./faq.data"

export const FAQ = () => {
    return (
      <div>
        {faq.map((faqItem, index) => (
          <FAQItem key={index} question={faqItem.question} answer={faqItem.answer} index={index} />
        ))}
      </div>
    );
  };