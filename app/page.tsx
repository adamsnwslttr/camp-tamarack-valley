'use client';

import Image from "next/image";
import { Inter, Quicksand } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import Navbar from './components/navbar';
import FAQ from './components/faq';


const inter = Inter({ subsets: ["latin"], variable: "--font-body" });
const quicksand = Quicksand({ subsets: ["latin"], variable: "--font-heading" });

export default function Home() {
  return (
    <main className={`${inter.variable} ${quicksand.variable} font-body bg-hero text-forest`}>

      <Navbar />

      {/* Hero Section */}
      <section
        className="relative bg-hero text-center text-forest h-[600px] flex flex-col justify-center items-center px-6"
        style={{
          backgroundImage: 'url("/images/hero.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="bg-hero/80 backdrop-blur-sm p-6 rounded shadow-md">
          <h2 className="text-4xl font-heading font-bold mb-4">
            Where screen time stops, and adventure begins.
          </h2>
          <p className="text-lg font-body mb-6">
            Camp Tamarack Valley is a place for discovery, friendship, and the kind of memories you keep forever.
          </p>
          <a
            href="#signup"
            className="inline-block bg-ember hover:bg-bark text-hero font-bold py-3 px-6 rounded shadow-md transition duration-200"
          >
            Join the Adventure
          </a>
        </div>
      </section>


      {/* About Section */}
      <section id="about" className="bg-trail py-16 px-6 text-center text-bark">
        <h3 className="text-3xl font-heading font-bold mb-4">About Tamarack Valley</h3>
        <p className="max-w-3xl mx-auto font-body text-lg">
          Nestled deep in the woods, Camp Tamarack Valley is a screen-free oasis where kids can reconnect with nature, build confidence, and make lifelong friends.
          Our campers explore, learn, and play in a safe, supportive environment led by experienced, caring staff.
        </p>
      </section>
     
      {/* Programs Section */}
      <section id="programs" className="bg-pine py-16 px-6 text-hero text-center">
        <h3 className="text-3xl font-heading font-bold mb-6">Sample Programs</h3>
        <p className="max-w-3xl mx-auto font-body text-lg mb-4">
          From canoeing and archery to arts & crafts and stargazing — each day is packed with variety and excitement. View our full program schedule in Notion:
        </p>
        <div className="flex justify-center">
          <iframe
            src="https://www.notion.so/embed/sample-program-table"
            className="w-full max-w-3xl h-96 border rounded"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      {/* Staff Section */}
      <section id="staff" className="bg-moss py-16 px-6 text-center text-hero">
        <h3 className="text-3xl font-heading font-bold mb-6">Meet Our Staff</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-hero rounded-lg shadow p-6 text-forest">
            <Image src="/images/alex.jpg" alt="Camp Director" width={300} height={300} className="rounded-full mx-auto mb-4" />
            <h4 className="font-bold font-heading text-xl">Alex, Camp Director</h4>
            <p className="font-body">15 years of outdoor education experience and boundless camp spirit.</p>
          </div>
          <div className="bg-hero rounded-lg shadow p-6 text-forest">
            <Image src="/images/jordan.jpg" alt="Counselor" width={300} height={300} className="rounded-full mx-auto mb-4" />
            <h4 className="font-bold font-heading text-xl">Jordan, Senior Counselor</h4>
            <p className="font-body">Beloved by campers for storytelling and late-night singalongs.</p>
          </div>
          <div className="bg-hero rounded-lg shadow p-6 text-forest">
            <Image src="/images/morgan.jpg" alt="Activity Leader" width={300} height={300} className="rounded-full mx-auto mb-4" />
            <h4 className="font-bold font-heading text-xl">Morgan, Activity Lead</h4>
            <p className="font-body">Brings creative magic to arts & crafts, rain or shine.</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}

      <FAQ />

      {/* Contact/Signup Section */}
      <section id="signup" className="bg-ember text-hero py-16 px-6 text-center">
        <h3 className="text-3xl font-heading font-bold mb-4">Ready to Join the Adventure?</h3>
        <p className="max-w-xl mx-auto font-body text-lg mb-6">
          Registration opens soon! Join our email list to be the first to know.
        </p>
        <form action="https://convertkit.com/your-form-endpoint" method="POST" className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <input
            type="email"
            name="email"
            placeholder="you@example.com"
            className="px-4 py-2 rounded text-forest"
            required
          />
          <button
            type="submit"
            className="bg-hero hover:bg-trail text-forest font-bold py-2 px-6 rounded shadow-md transition duration-200"
          >
            Sign Up
          </button>
        </form>
      </section>
    </main>
  );
}
