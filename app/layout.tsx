import './globals.css'
import { Inter, Quicksand } from 'next/font/google'
import type { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const quicksand = Quicksand({ subsets: ['latin'], variable: '--font-quicksand' })

export const metadata: Metadata = {
  title: 'Camp Tamarack Valley',
  description: 'Where screen time stops, and adventure begins.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${quicksand.variable}`}>
      <body className="bg-hero text-black dark:bg-[#1a1a1a] dark:text-white">
        {children}

        {/* Floating Back to Top Button */}
        <a
          href="#"
          className="fixed bottom-6 right-6 bg-ember text-hero p-3 rounded-full shadow-lg hover:bg-bark transition duration-300 z-50"
          aria-label="Back to Top"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
          </svg>
        </a>
      </body>
    </html>
  )
}
