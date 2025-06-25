export default function Home() {
  return (
    <main className="text-text dark:text-lighttext">
      {/* Hero Section */}
      <section className="min-h-[80vh] flex flex-col justify-center items-center text-center px-6 py-20 bg-background dark:bg-darkbg">
        <h1 className="text-5xl md:text-6xl font-serif mb-4">
          Camp Tamarack Valley
        </h1>
        <p className="text-xl md:text-2xl max-w-2xl mb-8">
          Where screen time stops, and adventure begins.
        </p>
        <a
          href="#"
          className="bg-accent text-white font-semibold px-6 py-3 rounded-xl shadow-md hover:opacity-90 transition"
        >
          Join the Waitlist
        </a>
      </section>

      {/* About Section */}
      <section className="py-20 px-6 text-center bg-green-50 dark:bg-green-900">
        <h2 className="text-3xl font-serif mb-4">Unplug. Explore. Grow.</h2>
        <p className="max-w-2xl mx-auto text-lg">
          Camp Tamarack Valley offers kids ages 7–14 a screen-free summer of outdoor adventure, creativity, and connection. From canoeing to campfire stories, every moment is designed to build confidence and lifelong friendships.
        </p>
      </section>

      {/* Programs Preview */}
      <section className="py-20 px-6 text-center bg-yellow-50 dark:bg-yellow-900">
        <h2 className="text-3xl font-serif mb-4">Sample Programs</h2>
        <div className="flex flex-col md:flex-row justify-center gap-6 mt-8">
          <div className="bg-white dark:bg-[#1e1e1e] p-6 rounded-xl shadow-md w-full md:w-1/3">
            <h3 className="text-xl font-bold mb-2">Outdoor Skills</h3>
            <p>Learn fire-building, shelter-making, and compass navigation.</p>
          </div>
          <div className="bg-white dark:bg-[#1e1e1e] p-6 rounded-xl shadow-md w-full md:w-1/3">
            <h3 className="text-xl font-bold mb-2">Creative Arts</h3>
            <p>Daily painting, music, drama, and storytelling sessions.</p>
          </div>
          <div className="bg-white dark:bg-[#1e1e1e] p-6 rounded-xl shadow-md w-full md:w-1/3">
            <h3 className="text-xl font-bold mb-2">Team Challenges</h3>
            <p>Group games that build teamwork, resilience, and laughter.</p>
          </div>
        </div>
        <a
          href="/programs"
          className="mt-6 inline-block text-accent font-semibold hover:underline"
        >
          View Full Schedule →
        </a>
      </section>

      {/* Staff Preview */}
      <section className="py-20 px-6 text-center bg-green-100 dark:bg-green-800">
        <h2 className="text-3xl font-serif mb-4">Meet Our Staff</h2>
        <div className="flex flex-col md:flex-row justify-center gap-6 mt-8">
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 bg-gray-400 rounded-full mb-2" />
            <h3 className="font-semibold">Jordan</h3>
            <p className="text-sm text-muted">Camp Director</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 bg-gray-400 rounded-full mb-2" />
            <h3 className="font-semibold">Sam</h3>
            <p className="text-sm text-muted">Outdoor Leader</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 bg-gray-400 rounded-full mb-2" />
            <h3 className="font-semibold">Riley</h3>
            <p className="text-sm text-muted">Arts & Crafts</p>
          </div>
        </div>
        <a
          href="/staff"
          className="mt-6 inline-block text-accent font-semibold hover:underline"
        >
          See All Staff →
        </a>
      </section>

      {/* FAQ Preview */}
      <section className="py-20 px-6 text-center bg-white dark:bg-[#2c2c2c]">
        <h2 className="text-3xl font-serif mb-4">Questions?</h2>
        <p className="max-w-xl mx-auto mb-6">
          What should my child bring? How does registration work? Find answers to common parent questions.
        </p>
        <a
          href="/faq"
          className="text-accent font-semibold hover:underline"
        >
          Read the FAQs →
        </a>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-6 bg-accent text-white text-center">
        <h2 className="text-3xl font-serif mb-4">Secure Your Spot</h2>
        <p className="mb-6 max-w-xl mx-auto">
          Spaces are limited. Join the waitlist and be the first to know when registration opens.
        </p>
        <a
          href="#"
          className="bg-white text-accent font-semibold px-6 py-3 rounded-xl shadow hover:opacity-90 transition"
        >
          Join the Waitlist
        </a>
      </section>
    </main>
  );
}
