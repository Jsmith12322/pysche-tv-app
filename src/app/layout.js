import './globals.css';
import { Analytics } from '@vercel/analytics/react';
import Footer from './components/Footer';

export const metadata = {
  title: 'PyscheTV',
  description: 'Welcome to PyscheTV — a new world of content',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}
