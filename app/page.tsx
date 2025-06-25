export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center bg-background text-text dark:bg-darkbg dark:text-lighttext px-4">
      <h1 className="text-5xl md:text-6xl font-serif mb-4">
        Camp Tamarack Valley
      </h1>
      <p className="text-xl md:text-2xl mb-8 max-w-xl">
        Where screen time stops, and adventure begins.
      </p>
      <a
        href="#"
        className="bg-accent text-white font-semibold px-6 py-3 rounded-xl shadow-md hover:opacity-90 transition"
      >
        Join the Waitlist
      </a>
    </main>
  );
}
