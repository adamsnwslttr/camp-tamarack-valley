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
      </body>
    </html>
  )
}
