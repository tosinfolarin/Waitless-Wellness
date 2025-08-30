import { useState } from "react";
import faqs from './FAQs.json';

interface Dropdown {
  isOpen: boolean;
  question: string;
  answer: string;
}

const FAQs = () => {
  const [dropdowns, setDropdowns] = useState<Dropdown[]>([
    {
      isOpen: false,
      question: faqs.FAQs.question1.question,
      answer: faqs.FAQs.question1.answer,
    },
    {
      isOpen: false,
      question: faqs.FAQs.question2.question,
      answer: faqs.FAQs.question2.answer,
    },
    {
      isOpen: false,
      question: faqs.FAQs.question3.question,
      answer: faqs.FAQs.question3.answer,
    },
    {
      isOpen: false,
      question: faqs.FAQs.question4.question,
      answer: faqs.FAQs.question4.answer,
    },
    {
      isOpen: false,
      question: faqs.FAQs.question5.question,
      answer: faqs.FAQs.question5.answer,
    },
    {
      isOpen: false,
      question: faqs.FAQs.question6.question,
      answer: faqs.FAQs.question6.answer,
    },
    {
      isOpen: false,
      question: faqs.FAQs.question7.question,
      answer: faqs.FAQs.question7.answer,
    },
  ]);

  const toggleDropdown = (index: number) => {
    setDropdowns(prev =>
      prev.map((item, i) =>
        i === index ? { ...item, isOpen: !item.isOpen } : item
      )
    );
  };

  return (
    <div className="dropdown-container">
      <h1>Frequently Asked Questions</h1>
      <ul>
        {dropdowns.map((dropdown, index) => (
          <li key={index}>
            <button onClick={() => toggleDropdown(index)}>
              <h3>{dropdown.question}</h3>
            </button>
            {dropdown.isOpen && <p>{dropdown.answer}</p>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FAQs;
