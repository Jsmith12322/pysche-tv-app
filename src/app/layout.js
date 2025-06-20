import './globals.css'
import { Analytics } from '@vercel/analytics/react'

export const metadata = {
  title: 'PyscheTV',
  description: 'Welcome to PyscheTV – a new world of content',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}

