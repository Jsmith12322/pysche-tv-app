import './globals.css'
import { GeistSans, GeistMono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'

const geistSans = GeistSans({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = GeistMono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata = {
  title: 'PyscheTV',
  description: 'Welcome to PyscheTV – a new world of content',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
