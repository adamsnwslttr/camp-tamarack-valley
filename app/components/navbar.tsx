'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-forest text-hero p-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold font-heading">Camp Tamarack Valley</h1>

        {/* Hamburger Icon */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          <svg
            className="w-6 h-6"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M4 5h16M4 12h16M4 19h16" 
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            />
          </svg>
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-6 text-sm font-body">
          <Link href="#" className="hover:underline">Home</Link>
          <Link href="#about" className="hover:underline">About</Link>
          <Link href="#programs" className="hover:underline">Programs</Link>
          <Link href="#staff" className="hover:underline">Staff</Link>
          <Link href="#faq" className="hover:underline">FAQ</Link>
          <Link href="#photos" className="hover:underline">Photos</Link>
          <Link href="#contact" className="hover:underline">Contact</Link>
          <Link
            href="#signup"
            className="ml-4 bg-ember hover:bg-bark text-hero font-semibold py-2 px-4 rounded shadow-md transition duration-200"
          >
            Join the Adventure
          </Link>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="mt-4 flex flex-col space-y-4 text-sm font-body md:hidden">
          <Link href="#" className="hover:underline">Home</Link>
          <Link href="#about" className="hover:underline">About</Link>
          <Link href="#programs" className="hover:underline">Programs</Link>
          <Link href="#staff" className="hover:underline">Staff</Link>
          <Link href="#faq" className="hover:underline">FAQ</Link>
          <Link href="#photos" className="hover:underline">Photos</Link>
          <Link href="#contact" className="hover:underline">Contact</Link>
          <Link
            href="#signup"
            className="bg-ember hover:bg-bark text-hero font-semibold py-2 px-4 rounded shadow-md transition duration-200"
          >
            Join the Adventure
          </Link>
        </div>
      )}
    </nav>
  );
}
