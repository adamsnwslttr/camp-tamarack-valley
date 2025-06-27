'use client';
import React, { useState, useEffect, useRef } from 'react';

const testimonials = [
  { quote: "Camp Tamarack Valley gave my daughter the summer of her life. She came back more confident and full of stories about her adventures!", name: "Emma R." },
  { quote: "Our son has been to a few camps, but none as caring and fun as Tamarack Valley. The staff are exceptional!", name: "James T." },
  { quote: "I was nervous about a screen-free camp, but it was the best decision we ever made. He made real friends and can’t wait to go back.", name: "Priya S." },
  { quote: "The counselors made my child feel welcome from day one. The camp community is incredible!", name: "Laura M." },
  { quote: "This camp is a hidden gem — I wish I’d found it years ago. Our kids are already begging to return next summer!", name: "David K." },
  { quote: "The activities were beyond our expectations. Our child learned new skills and made friendships to last a lifetime!", name: "Sophia L." },
];

export default function Testimonials() {
  const totalPages = Math.ceil(testimonials.length / 3);
  const [currentPage, setCurrentPage] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const resetTimeout = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      setCurrentPage((prev) => (prev + 1) % totalPages);
    }, 5000);
    return () => resetTimeout();
  }, [currentPage, totalPages]);

  const startIndex = currentPage * 3;
  const currentTestimonials = testimonials.slice(startIndex, startIndex + 3);

  return (
    <section id="testimonials" className="bg-sky py-16 px-6 text-center text-forest">
      <h3 className="text-3xl font-heading font-bold mb-8">What Parents Are Saying</h3>

      <div className="flex justify-center gap-6 max-w-6xl mx-auto mb-6 transition-transform duration-500 ease-in-out flex-wrap md:flex-nowrap">
        {currentTestimonials.map((t, index) => (
          <div
            key={index}
            className="bg-hero rounded-lg shadow-md p-6 flex flex-col justify-between w-full md:w-1/3"
          >
            <p className="font-body italic mb-4">“{t.quote}”</p>
            <p className="font-heading font-bold">{t.name}</p>
          </div>
        ))}
      </div>


      {/* Dots */}
      <div className="flex justify-center mt-4 space-x-2">
        {Array.from({ length: totalPages }).map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentPage(idx)}
            className={`w-3 h-3 rounded-full ${currentPage === idx ? 'bg-forest' : 'bg-forest opacity-30'} transition`}
            aria-label={`Show testimonials page ${idx + 1}`}
          ></button>
        ))}
      </div>
    </section>
  );
}
