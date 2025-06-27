'use client';
import React, { useEffect, useState } from 'react';

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
  {
    quote: "The counselors made my child feel welcome from day one. The camp community is incredible!",
    name: "Laura M.",
  },
  {
    quote: "This camp is a hidden gem — I wish I’d found it years ago. Our kids are already begging to return next summer!",
    name: "David K.",
  },
];

export default function Testimonials() {
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setStartIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setStartIndex((prev) => (prev + 1) % testimonials.length);
  };

  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      const index = (startIndex + i) % testimonials.length;
      visible.push(testimonials[index]);
    }
    return visible;
  };

  return (
    <section id="testimonials" className="bg-sky py-16 px-6 text-center text-forest relative">
      <h3 className="text-3xl font-heading font-bold mb-8">What Parents Are Saying</h3>

      <div className="max-w-5xl mx-auto flex items-center relative">
        {/* Left Arrow */}
        <button
          onClick={handlePrev}
          className="absolute left-0 z-10 bg-forest bg-opacity-70 hover:bg-opacity-90 text-hero rounded-full w-10 h-10 flex items-center justify-center shadow transition duration-200"
          aria-label="Previous testimonials"
        >
          ‹
        </button>

        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8 transition-transform duration-500">
          {getVisibleTestimonials().map((testimonial, index) => (
            <div
              key={index}
              className="bg-hero rounded-lg shadow-md p-6 transform hover:scale-105 transition duration-300"
            >
              <p className="font-body italic mb-4">“{testimonial.quote}”</p>
              <p className="font-heading font-bold">{testimonial.name}</p>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={handleNext}
          className="absolute right-0 z-10 bg-forest bg-opacity-70 hover:bg-opacity-90 text-hero rounded-full w-10 h-10 flex items-center justify-center shadow transition duration-200"
          aria-label="Next testimonials"
        >
          ›
        </button>
      </div>
    </section>
  );
}
