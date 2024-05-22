import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import {Providers} from "./providers";
import './globals.css';
import Nav from '@/components/Nav';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'ChordMark',
  description:
    'The easiest way to collect, share & play your favorite chords & tabs',
  keywords: 'chords, tabs, setlists, offline',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"/>
      </head>
      <body className={inter.className}>
        <Providers>
          <Nav/>
          <main className='flex flex-col items-center'>
          {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
