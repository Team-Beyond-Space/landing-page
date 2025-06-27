import type { Metadata } from 'next'
import { Space_Grotesk } from 'next/font/google'
import './globals.css'

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-space-grotesk'
})

export const metadata: Metadata = {
  title: 'Team Beyond Space - Tech to explore the beyond',
  description: 'Building open source technology and cool projects to augment space related tech or simulation engines.',
  keywords: 'space technology, open source, simulation engines, space exploration, Team Beyond Space',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.className} bg-cosmic-dark`}>{children}</body>
    </html>
  )
}