// Trigger fresh Vercel build

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
      <body className={`${inter.variable} ${playfair.variable} font-sans bg-background text-text dark:bg-darkbg dark:text-lighttext`}>
        {children}
      </body>
    </html>
  );
}
