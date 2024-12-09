import './globals.css'
import { Inter } from 'next/font/google'
import { Providers } from './providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Styleify - Fashion from Music',
  description: 'Discover your fashion aesthetic based on your Spotify music taste',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <main className="min-h-screen bg-gradient-to-br from-purple-900 to-pink-900">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  )
}