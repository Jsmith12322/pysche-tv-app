import './globals.css';
import { Analytics } from '@vercel/analytics/react';
import Footer from './components/FooterComponent';

export const metadata = {
  title: 'PyscheTV',
  description: 'Welcome to PyscheTV',
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
