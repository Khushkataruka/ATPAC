"use client"
import React, { useState } from "react";

const faqs = [
  {
    question: "What is the placement process at SVNIT?",
    answer:
      "The placement process typically includes aptitude tests, technical interviews, group discussions, and HR interviews. It varies depending on the company.",
  },
  {
    question: "How can I prepare for campus placements?",
    answer:
      "You can prepare by practicing aptitude questions, coding problems, mock interviews, and referring to resources provided by the CDC/SPO.",
  },
  {
    question: "Are internships mandatory for placements?",
    answer:
      "While not mandatory, internships provide valuable experience and often increase your chances of securing a good placement.",
  },
  {
    question: "What is the dress code for placement interviews?",
    answer:
      "Formal attire is recommended: suit and tie for men, formal business attire for women.",
  },
  {
    question: "Can I apply to multiple companies at the same time?",
    answer:
      "Yes, as long as you meet eligibility criteria and follow the placement rules of SVNIT.",
  },
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-4 cursor-pointer hover:shadow-lg transition"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-gray-900">
                  {faq.question}
                </h3>
                <span className="text-gray-500 text-xl">
                  {openIndex === index ? "−" : "+"}
                </span>
              </div>
              {openIndex === index && (
                <p className="mt-2 text-gray-600">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
