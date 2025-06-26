import Image from "next/image";
import { Inter, Quicksand } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-body" });
const quicksand = Quicksand({ subsets: ["latin"], variable: "--font-heading" });

export default function Home() {
  return (
    <main className={`${inter.variable} ${quicksand.variable} font-sans bg-sandstone text-darkForest`}>
      {/* Navbar */}
      <nav className="flex justify-between items-center p-6 bg-darkForest text-sandstone">
        <h1 className="text-2xl font-bold font-quicksand">Camp Tamarack Valley</h1>
        <div className="flex items-center space-x-6 text-sm font-inter">
          <a href="#" className="hover:underline">Home</a>
          <a href="#about" className="hover:underline">About</a>
          <a href="#programs" className="hover:underline">Programs</a>
          <a href="#staff" className="hover:underline">Staff</a>
          <a href="#faq" className="hover:underline">FAQ</a>
          <a href="#photos" className="hover:underline">Photos</a>
          <a href="#contact" className="hover:underline">Contact</a>
          <a
            href="#signup"
            className="ml-4 bg-goldenrod hover:bg-goldenrodDark text-darkForest font-semibold py-2 px-4 rounded shadow-md transition duration-200"
          >
            Join the Adventure
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-sky p-16 text-center text-darkForest">
        <h2 className="text-4xl font-quicksand font-bold mb-4">Where screen time stops, and adventure begins.</h2>
        <p className="text-lg font-inter mb-6">Camp Tamarack Valley is a place for discovery, friendship, and the kind of memories you keep forever.</p>
        <a
          href="#signup"
          className="inline-block bg-goldenrod hover:bg-goldenrodDark text-darkForest font-bold py-3 px-6 rounded shadow-md transition duration-200"
        >
          Join the Adventure
        </a>
      </section>

      {/* About Section */}
      <section id="about" className="bg-sandstoneAlt py-16 px-6 text-center">
        <h3 className="text-3xl font-quicksand font-bold mb-4">About Tamarack Valley</h3>
        <p className="max-w-3xl mx-auto font-inter text-lg">
          Nestled deep in the woods, Camp Tamarack Valley is a screen-free oasis where kids can reconnect with nature, build confidence, and make lifelong friends.
          Our campers explore, learn, and play in a safe, supportive environment led by experienced, caring staff.
        </p>
      </section>

      {/* Programs Section */}
      <section id="programs" className="bg-fern py-16 px-6 text-sandstone text-center">
        <h3 className="text-3xl font-quicksand font-bold mb-6">Sample Programs</h3>
        <p className="max-w-3xl mx-auto font-inter text-lg mb-4">
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
      <section id="staff" className="bg-sky py-16 px-6 text-center">
        <h3 className="text-3xl font-quicksand font-bold mb-6 text-darkForest">Meet Our Staff</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-white rounded-lg shadow p-6">
            <Image src="/staff1.jpg" alt="Camp Director" width={300} height={300} className="rounded-full mx-auto mb-4" />
            <h4 className="font-bold font-quicksand text-xl">Alex, Camp Director</h4>
            <p className="font-inter">15 years of outdoor education experience and boundless camp spirit.</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <Image src="/staff2.jpg" alt="Counselor" width={300} height={300} className="rounded-full mx-auto mb-4" />
            <h4 className="font-bold font-quicksand text-xl">Jordan, Senior Counselor</h4>
            <p className="font-inter">Beloved by campers for storytelling and late-night singalongs.</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <Image src="/staff3.jpg" alt="Activity Leader" width={300} height={300} className="rounded-full mx-auto mb-4" />
            <h4 className="font-bold font-quicksand text-xl">Morgan, Activity Lead</h4>
            <p className="font-inter">Brings creative magic to arts & crafts, rain or shine.</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="bg-sandstoneAlt py-16 px-6 text-center">
        <h3 className="text-3xl font-quicksand font-bold mb-6">FAQs</h3>
        <div className="max-w-4xl mx-auto text-left font-inter">
          <h4 className="font-bold">What ages do you accept?</h4>
          <p className="mb-4">Camp is open to children aged 7–14.</p>
          <h4 className="font-bold">Where is the camp located?</h4>
          <p className="mb-4">We’re nestled in the Tamarack Valley region, just 90 minutes north of the city.</p>
          <h4 className="font-bold">What’s your tech policy?</h4>
          <p className="mb-4">We are 100% screen-free — campers leave devices at home to fully immerse in nature and friendships.</p>
        </div>
      </section>

      {/* Contact/Signup Section */}
      <section id="signup" className="bg-fern text-sandstone py-16 px-6 text-center">
        <h3 className="text-3xl font-quicksand font-bold mb-4">Ready to Join the Adventure?</h3>
        <p className="max-w-xl mx-auto font-inter text-lg mb-6">
          Registration opens soon! Join our email list to be the first to know.
        </p>
        <form action="https://convertkit.com/your-form-endpoint" method="POST" className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <input
            type="email"
            name="email"
            placeholder="you@example.com"
            className="px-4 py-2 rounded text-darkForest"
            required
          />
          <button
            type="submit"
            className="bg-goldenrod hover:bg-goldenrodDark text-darkForest font-bold py-2 px-6 rounded shadow-md transition duration-200"
          >
            Sign Up
          </button>
        </form>
      </section>
    </main>
  );
}
