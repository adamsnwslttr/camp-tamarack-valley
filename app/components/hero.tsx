'use client';
import { useState, useEffect } from 'react';

const images = [
  '/images/hero1.jpg',
  '/images/hero2.jpg',
  '/images/hero3.jpg',
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[60vh] md:h-[80vh] overflow-hidden">
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`Hero slide ${index + 1}`}
          className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
            index === current ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}

      <div className="absolute inset-0 flex flex-col justify-center items-center text-hero text-center p-4 bg-black/30">
        <h2 className="text-4xl md:text-6xl font-heading font-bold mb-4 drop-shadow">
          Where screen time stops, and adventure begins.
        </h2>
        <p className="text-lg md:text-2xl font-body mb-6 drop-shadow">
          Camp Tamarack Valley is a place for discovery, friendship, and the kind of memories you keep forever.
        </p>
        <a
          href="#signup"
          className="inline-block bg-ember hover:bg-bark text-hero font-bold py-3 px-6 rounded shadow-md transition duration-200"
        >
          Join the Adventure
        </a>
      </div>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full ${
              index === current ? 'bg-white' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
