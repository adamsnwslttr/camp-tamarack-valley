// app/components/footer.tsx
export default function Footer() {
  return (
    <footer className="bg-forest text-hero py-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center px-6 text-center md:text-left space-y-6 md:space-y-0">
        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-heading font-bold mb-2">Camp Tamarack Valley</h4>
          <p className="font-body text-sm">
            1000 Fern Gully Ln<br />
            Algonquin Highlands, ON K0M 1J1<br />
            Canada
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col md:flex-row md:items-center md:space-x-6 text-sm font-body">
          <a href="#" className="hover:underline">Home</a>
          <a href="#about" className="hover:underline">About</a>
          <a href="#programs" className="hover:underline">Programs</a>
          <a href="#staff" className="hover:underline">Staff</a>
          <a href="#faq" className="hover:underline">FAQ</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-6 text-center text-xs font-body text-hero">
        © 2025 Camp Tamarack Valley. All rights reserved.
      </div>
    </footer>
  );
}

