'use client';

import Image from "next/image";
import { Inter, Quicksand } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import Navbar from './components/navbar';
import Hero from './components/hero';
import FAQ from './components/faq';
import Testimonials from './components/testimonials';
import Footer from './components/footer';



const inter = Inter({ subsets: ["latin"], variable: "--font-body" });
const quicksand = Quicksand({ subsets: ["latin"], variable: "--font-heading" });

export default function Home() {
  return (
    <main className={`${inter.variable} ${quicksand.variable} font-body bg-hero text-forest`}>

      <Navbar />

      {/* Hero Section */}

      <Hero />


      {/* About Section */}
      <section id="about" className="bg-trail py-16 px-6 text-bark">
        <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-8">
          {/* Text */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h3 className="text-3xl font-heading font-bold mb-4">About Tamarack Valley</h3>
            <p className="font-body text-lg max-w-xl mx-auto md:mx-0">
              Nestled deep in the woods, Camp Tamarack Valley is a screen-free oasis where kids can reconnect with nature, build confidence, and make lifelong friends.
              Our campers explore, learn, and play in a safe, supportive environment led by experienced, caring staff.
            </p>
          </div>
      
          {/* Image */}
          <div className="w-full md:w-1/2">
            <img
              src="/images/tamarack.jpg"
              alt="Beautiful view of Tamarack Valley"
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>


     
      {/* Programs Section */}
      <section id="activities" className="bg-hero py-16 px-6 text-center text-forest">
        <h3 className="text-3xl font-heading font-bold mb-8">Our Most Popular Activities</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="flex flex-col items-center">
            <div className="text-5xl mb-2">⛺️</div>
            <h4 className="font-heading text-xl">Campfires</h4>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-5xl mb-2">🌊</div>
            <h4 className="font-heading text-xl">Canoeing</h4>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-5xl mb-2">🎨</div>
            <h4 className="font-heading text-xl">Arts & Crafts</h4>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-5xl mb-2">🎵</div>
            <h4 className="font-heading text-xl">Singing</h4>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-5xl mb-2">🌌</div>
            <h4 className="font-heading text-xl">Star Gazing</h4>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-5xl mb-2">🥾</div>
            <h4 className="font-heading text-xl">Hiking</h4>
          </div>
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

      {/* Testimonial Section */}

      <Testimonials />

      {/* Location Section */}
      
      <section id="location" className="bg-trail py-16 px-6 text-bark">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
          {/* Text */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h3 className="text-3xl font-heading font-bold mb-4">Where to Find Us</h3>
            <p className="font-body text-lg max-w-xl mx-auto md:mx-0">
              Visit us at <span className="font-semibold">1000 Fern Gully Ln, Algonquin Highlands, ON K0M 1J1, Canada</span>.<br /><br /> 
              We’re just a short drive north of Toronto, nestled among the lakes and forests of Ontario’s beautiful cottage country.
            </p>
            <div className="font-body text-lg mt-4">
              <p>Email us: <a href="mailto:info@camptamarackvalley.ca" className="underline hover:text-forest-dark">info@camptamarackvalley.ca</a></p>
              <p className="mt-2">Call us: <a href="tel:+14165550123" className="underline hover:text-forest-dark">(416) 555-0123</a></p>
            </div>
          </div>
      
          {/* Map */}
          <div className="w-full md:w-1/2 rounded-lg shadow-lg overflow-hidden aspect-video md:aspect-auto">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2817.4222024609044!2d-78.74566285921163!3d45.07723087119067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cd5a0526896da89%3A0xc81d661a467c58bc!2s1000%20Fern%20Gully%20Ln%2C%20Algonquin%20Highlands%2C%20ON%20K0M%201J1!5e0!3m2!1sen!2sca!4v1751043921597!5m2!1sen!2sca"
              className="w-full h-[300px] md:h-[400px]"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
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

      {/* Footer Section */}

      <Footer />

    </main>
  );
}
