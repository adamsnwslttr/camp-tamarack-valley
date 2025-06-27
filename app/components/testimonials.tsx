'use client';
import React from 'react';

const testimonials = [
  {
    quote: "Camp Tamarack Valley gave my daughter the summer of her life. She came back more confident and full of stories about her adventures!",
    name: "Emma R.",
  },
  {
    quote: "Our son has been to a few camps, but none as caring and fun as Tamarack Valley. The staff are exceptional!",
    name: "James T.",
  },
  {
    quote: "I was nervous about a screen-free camp, but it was the best decision we ever made. He made real friends and can’t wait to go back.",
    name: "Priya S.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-sky py-16 px-6 text-center text-forest">
      <h3 className="text-3xl font-heading font-bold mb-8">What Parents Are Saying</h3>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-hero rounded-lg shadow-md p-6 transform hover:scale-105 transition duration-300"
          >
            <p className="font-body italic mb-4">“{testimonial.quote}”</p>
            <p className="font-heading font-bold">{testimonial.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
