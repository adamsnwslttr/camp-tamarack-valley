'use client';
import { useState } from 'react';

const faqs = [
  {
    question: "What ages do you accept?",
    answer: "Camp Tamarack Valley welcomes children between the ages of 7 and 14. Our programs are specifically designed to engage and challenge kids in this age range, ensuring they have the most fun and rewarding experience possible while making new friends and learning new skills.",
  },
  {
    question: "How long have you been operating?",
    answer: "We hosted our first campers in 1978 and have proudly operated every summer since! With over four decades of experience, Camp Tamarack Valley has a rich history of creating unforgettable memories and fostering a love for the outdoors in generations of campers.",
  },
  {
    question: "How far is Camp Tamarack Valley from Toronto?",
    answer: "Our camp is approximately a 2-hour drive north of Toronto, making it an easy and scenic weekend trip for families. Whether you’re coming for drop-off or a visiting day, the journey offers beautiful views of Ontario’s forests and lakes.",
  },
  {
    question: "What is the camper-to-counselor ratio?",
    answer: "We maintain a low camper-to-counselor ratio of 5:1 to ensure every child receives personalized attention and support. This ratio allows our experienced staff to truly get to know each camper, keeping them safe, engaged, and feeling included throughout their stay.",
  },
  {
    question: "What activities do you offer?",
    answer: "Our programs are packed with exciting options like canoeing on pristine lakes, archery, arts & crafts in our creative lodge, nature hikes through the forest, stargazing around the campfire, and classic camp games. There’s always something new to try and adventures waiting every day.",
  },
  {
    question: "Do you accommodate dietary restrictions?",
    answer: "Yes! Our professional kitchen staff is well-equipped to handle most common dietary restrictions, including vegetarian, gluten-free, and nut-free options. We take food allergies seriously and work closely with parents to ensure every camper enjoys safe, nutritious, and delicious meals during their stay.",
  },
];


export default function FAQ() {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);  

  const toggleFAQ = (index: number) => {
    setOpenIndexes((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index) // close if open
        : [...prev, index]                // add if closed
    );
  };

  return (
    <section id="faq" className="bg-hero py-16 px-6 text-center text-bark">
      <h3 className="text-3xl font-heading font-bold mb-8">FAQs</h3>
      <div className="max-w-4xl mx-auto text-left font-body space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-bark pb-4">
            <button
              className="w-full text-left text-lg font-bold flex items-center gap-3 focus:outline-none"
              onClick={() => toggleFAQ(index)}
            >
              <span className="">{openIndex === index ? '-' : '+'}</span>
              <span className="flex-1">{faq.question}</span>
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
