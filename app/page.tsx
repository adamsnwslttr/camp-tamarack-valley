export default function Home() {
  return (
    <main className="bg-sandstone text-darkForest">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-6 bg-darkForest text-sandstone">
        <h1 className="text-2xl font-bold font-quicksand">Camp Tamarack Valley</h1>
        <div className="flex items-center space-x-6 text-sm font-inter">
          <a href="/" className="hover:underline">Home</a>
          <a href="#about" className="hover:underline">About</a>
          <a href="#programs" className="hover:underline">Programs</a>
          <a href="#staff" className="hover:underline">Staff</a>
          <a href="#faq" className="hover:underline">FAQ</a>
          <a href="/gallery" className="hover:underline">Photos</a>
          <a href="#contact" className="hover:underline">Contact</a>
          <a
            href="#signup"
            className="ml-4 bg-goldenrod hover:bg-goldenrodDark text-darkForest font-semibold py-2 px-4 rounded shadow-md transition duration-200"
          >
            Join the Adventure
          </a>
        </div>
      </nav>


      {/* Hero */}
      <section className="text-center py-20 px-6 bg-lightMoss text-darkForest">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 font-quicksand">
          Where screen time stops, and adventure begins.
        </h2>
        <p className="text-lg max-w-2xl mx-auto font-inter">
          Camp Tamarack Valley is a nature-first summer experience where kids build confidence, friendships, and unforgettable memories in the great outdoors.
        </p>
      </section>

      {/* About Section */}
      <section className="py-16 px-6 md:px-12 bg-sandstone text-darkForest">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-6 font-quicksand">What Makes Us Different?</h3>
          <p className="text-lg leading-relaxed font-inter">
            Nestled deep in the woods, Camp Tamarack Valley offers a classic summer camp experience with a modern touch. From canoeing and crafts to night hikes and storytelling around the fire, every moment is designed to spark joy, independence, and growth.
          </p>
        </div>
      </section>

      {/* Sample Programs */}
      <section className="py-16 px-6 md:px-12 bg-lightMoss text-darkForest">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-bold mb-6 text-center font-quicksand">Sample Programs</h3>
          <ul className="space-y-4 text-lg font-inter">
            <li>🛶 Canoe Skills & Lake Adventures</li>
            <li>🎨 Arts & Crafts in the Cabin</li>
            <li>🌲 Wilderness Survival Basics</li>
            <li>🔥 Campfire Stories & S'mores Nights</li>
          </ul>
        </div>
      </section>

      {/* Meet Our Staff */}
      <section className="py-16 px-6 md:px-12 bg-sandstone text-darkForest">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-6 font-quicksand">Meet Our Staff</h3>
          <p className="text-lg font-inter mb-8">
            Our counselors are experienced, caring, and full of camp spirit. Each one brings unique talents and a passion for the outdoors.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div>
              <div className="w-32 h-32 mx-auto rounded-full bg-gray-300 mb-2"></div>
              <h4 className="text-xl font-semibold font-quicksand">Jordan</h4>
              <p className="text-sm font-inter">Nature Educator</p>
            </div>
            <div>
              <div className="w-32 h-32 mx-auto rounded-full bg-gray-300 mb-2"></div>
              <h4 className="text-xl font-semibold font-quicksand">Avery</h4>
              <p className="text-sm font-inter">Campfire Activities Lead</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-6 md:px-12 bg-lightMoss text-darkForest">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-bold mb-6 text-center font-quicksand">Parent FAQs</h3>
          <div className="space-y-6 text-left font-inter">
            <div>
              <h4 className="font-bold">What age groups do you serve?</h4>
              <p>Ages 7–14 for all programs. Leadership-in-Training available for ages 15–16.</p>
            </div>
            <div>
              <h4 className="font-bold">Where is the camp located?</h4>
              <p>We’re nestled in Tamarack Forest, about 90 minutes north of Toronto.</p>
            </div>
            <div>
              <h4 className="font-bold">What’s your counselor-to-camper ratio?</h4>
              <p>We maintain a 1:5 ratio for safety and personalized attention.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
