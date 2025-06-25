export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-hero dark:bg-bark text-center px-6 py-20">
        <h1 className="text-4xl md:text-6xl font-heading font-bold text-forest dark:text-trail mb-4">
          Where screen time stops, and adventure begins.
        </h1>
        <p className="text-lg md:text-xl font-body text-moss dark:text-trail max-w-2xl mx-auto mb-8">
          Muddy boots. Campfire stories. Cannonballs off the dock. This is summer the way it was meant to be.
        </p>
        <a
          href="#"
          className="inline-block px-6 py-3 bg-ember text-white font-semibold rounded-full hover:bg-orange-600 transition"
        >
          Join the Adventure
        </a>
      </section>

      {/* About Section */}
      <section className="bg-trail dark:bg-forest text-bark dark:text-white px-6 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-heading mb-4">
            About Camp Tamarack Valley
          </h2>
          <p className="text-lg font-body">
            Nestled in the trees just outside the city, Camp Tamarack Valley is a place where kids can be kids.
            From sunrise hikes to twilight campfires, we blend classic camp traditions with a modern, inclusive approach.
            Whether it’s their first time away from home or their fifth summer back, campers return with new friendships,
            fresh confidence, and a whole lot of stories to tell.
          </p>
        </div>
      </section>
    </main>
  );
}
