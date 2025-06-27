'use client';
import { useState } from 'react';

const faqs = [
  {
    question: "What ages do you accept?",
    answer: "Camp is open to children aged 7–14.",
  },
  {
    question: "How long have you been operating?",
    answer: "We hosted our first campers in 1978 and have been opeerating every summer since!",
  },
  {
    question: "How far is Camp Tamarack Valley from Toronto?",
    answer: "Our camp is approximately a 2-hour drive north of Toronto, making it an easy and scenic weekend trip for families.",
  },
  {
    question: "What is the camper-to-counselor ratio?",
    answer: "We maintain a 5:1 camper-to-counselor ratio to ensure every child gets the attention they deserve.",
  },
  {
    question: "What activities do you offer?",
    answer: "Our program includes canoeing, archery, arts & crafts, hiking, campfire storytelling, and more!",
  },
  {
    question: "Do you accommodate dietary restrictions?",
    answer: "Yes! Our kitchen staff can handle most common dietary needs, including vegetarian, gluten-free, and nut-free options.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-hero py-16 px-6 text-center text-bark">
      <h3 className="text-3xl font-heading font-bold mb-8">FAQs</h3>
      <div className="max-w-4xl mx-auto text-left font-body space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-bark pb-4">
            <button
              className="w-full text-left text-lg font-bold flex justify-between items-center focus:outline-none"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              <span className="ml-2">{openIndex === index ? '-' : '+'}</span>
            </button>
            {openIndex === index && (
              <p className="mt-2 text-bark">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
