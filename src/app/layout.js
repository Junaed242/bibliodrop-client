import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'BiblioDrop - Online Book Delivery Management System',
  description: 'Your local library delivered straight to your doorstep.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen bg-gray-50/30 text-gray-900 antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}