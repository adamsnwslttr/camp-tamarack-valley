import '../styles/globals.css';
import { Inter, Playfair_Display } from 'next/font/google';
import type { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });

export const metadata: Metadata = {
  title: 'Camp Tamarack Valley',
  description: 'Where screen time stops, and adventure begins.',
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${playfair.variable} font-sans bg-background text-text dark:bg-darkbg dark:text-lighttext`}
      >
        <header className="w-full py-4 px-6 flex justify-between items-center bg-white dark:bg-darkbg shadow-md">
          <div className="text-xl font-serif">Camp Tamarack Valley</div>
          <nav className="space-x-4">
            <a href="/" className="hover:underline">Home</a>
            <a href="/about" className="hover:underline">About</a>
            <a href="/programs" className="hover:underline">Programs</a>
            <a href="/faq" className="hover:underline">FAQ</a>
            <a href="/contact" className="hover:underline">Contact</a>
          </nav>
        </header>
        <main className="pt-12">{children}</main>
      </body>
    </html>
  );
}
