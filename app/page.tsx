export default function Home() {
  return (
    <main className="bg-sandstone text-darkForest">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-6 bg-darkForest text-sandstone">
        <h1 className="text-2xl font-bold font-quicksand">Camp Tamarack Valley</h1>
        <a
          href="#"
          className="bg-goldenrod hover:bg-goldenrodDark text-darkForest font-semibold py-2 px-4 rounded transition"
        >
          Join the Adventure
        </a>
      </nav>

      {/* Hero Section */}
      <section className="text-center py-20 px-6 bg-lightMoss text-darkForest">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 font-quicksand">
          Where screen time stops, and adventure begins.
        </h2>
        <p className="text-lg max-w-2xl mx-auto font-inter">
          Camp Tamarack Valley is a nature-first summer experience where kids build confidence, friendships, and unforgettable memories in the great outdoors.
        </p>
      </section>

      {/* About Tamarack Valley */}
      <section className="py-16 px-6 md:px-12 bg-sandstone text-darkForest">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-6 font-quicksand">What Makes Us Different?</h3>
          <p className="text-lg leading-relaxed font-inter">
            Nestled deep in the woods, Camp Tamarack Valley offers a classic summer camp experience with a modern touch. From canoeing and crafts to night hikes and storytelling around the fire, every moment is designed to spark joy, independence, and growth.
          </p>
        </div>
      </section>
    </main>
  );
}
