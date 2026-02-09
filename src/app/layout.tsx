import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

import TanstackProvider from '@/providers/TanstackProvider';
import Navbar from '@/components/shared/Navbar/NavBar';
import Footer from '@/components/shared/Footer/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'MicroEarn - Complete Tasks & Earn Money',
  description: 'A platform connecting workers and buyers for micro-tasks.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TanstackProvider>
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </TanstackProvider>
      </body>
    </html>
  );
}
