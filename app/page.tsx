export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-[#fefcf8] text-[#1e1e1e] px-6 py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-serif mb-4">Camp Tamarack Valley</h1>
        <p className="text-lg md:text-xl mb-6 max-w-2xl mx-auto">
          Where screen time stops, and adventure begins.
        </p>
        <a
          href="#register"
          className="inline-block bg-[#4e6637] text-white py-3 px-6 rounded-xl font-semibold hover:bg-[#3b4e2c] transition"
        >
          Join the Adventure
        </a>
      </section>

      {/* About Section */}
      <section className="bg-[#2f3e2e] text-white px-6 py-16 text-center">
        <h2 className="text-3xl font-serif mb-4">Unplug. Explore. Connect.</h2>
        <p className="text-md max-w-2xl mx-auto">
          Nestled in the heart of the wilderness, Camp Tamarack Valley is a screen-free summer experience where kids build real-world confidence, friendships, and unforgettable memories.
        </p>
      </section>

      {/* Programs Section */}
      <section className="bg-[#dce2d0] text-[#1e1e1e] px-6 py-16 text-center">
        <h2 className="text-3xl font-serif mb-6">Camp Schedule</h2>
        <div className="max-w-3xl mx-auto">
          <iframe
            src="https://www.notion.so/embed/your-schedule-id"
            className="w-full h-[600px] border rounded-xl"
            title="Program Schedule"
          ></iframe>
        </div>
      </section>

      {/* Staff Section */}
      <section className="bg-[#795c3a] text-white px-6 py-16 text-center">
        <h2 className="text-3xl font-serif mb-6">Meet the Team</h2>
        <div className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
          {/* Sample staff card */}
          <div className="bg-white/10 p-4 rounded-lg shadow-md">
            <img src="https://via.placeholder.com/150" alt="Staff 1" className="rounded-full mx-auto mb-2" />
            <h3 className="font-bold">Alex Maple</h3>
            <p>Camp Director</p>
          </div>
          <div className="bg-white/10 p-4 rounded-lg shadow-md">
            <img src="https://via.placeholder.com/150" alt="Staff 2" className="rounded-full mx-auto mb-2" />
            <h3 className="font-bold">Jordan Pine</h3>
            <p>Head Counselor</p>
          </div>
          <div className="bg-white/10 p-4 rounded-lg shadow-md">
            <img src="https://via.placeholder.com/150" alt="Staff 3" className="rounded-full mx-auto mb-2" />
            <h3 className="font-bold">Taylor Birch</h3>
            <p>Program Coordinator</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-[#f4f1eb] text-[#1e1e1e] px-6 py-16 text-center">
        <h2 className="text-3xl font-serif mb-6">FAQs</h2>
        <div className="max-w-3xl mx-auto text-left space-y-4">
          <details className="bg-white rounded p-4 shadow">
            <summary className="cursor-pointer font-semibold">What ages can attend Camp Tamarack Valley?</summary>
            <p className="mt-2">Our programs are designed for children aged 8–14.</p>
          </details>
          <details className="bg-white rounded p-4 shadow">
            <summary className="cursor-pointer font-semibold">What’s your refund policy?</summary>
            <p className="mt-2">Full refunds are available up to 30 days before camp starts.</p>
          </details>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="bg-[#4e6637] text-white px-6 py-16 text-center">
        <h2 className="text-3xl font-serif mb-4">Ready for the best summer ever?</h2>
        <a
          href="#register"
          className="inline-block bg-white text-[#4e6637] font-semibold py-3 px-6 rounded-xl hover:bg-gray-100 transition"
        >
          Register Now
        </a>
      </section>
    </div>
  );
}
