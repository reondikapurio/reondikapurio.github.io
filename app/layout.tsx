import React from 'react';
import './globals.css';
import Header from './_components/header/page';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-black min-h-screen overflow-x-hidden">

        <Header />
        <main className="pt-16 min-h-screen font-serif">
          {children}
        </main>
      </body>
    </html>
  );
}
