import './globals.css';

import type { Metadata } from 'next';
import { Inter, Nunito } from 'next/font/google';
import React from 'react';

import { ThemeProvider } from './context/ThemeContext';

const inter = Inter({ subsets: ['latin'] });
const nunito = Nunito({
  subsets: ['latin'],
  weight: ['400', '500', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: 'Apostila Editora Capro',
  description: 'Material Didático da Editora Capro',
  icons: {
    icon: '/assets/book-icon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider>
      <html lang="pt-BR">
        <body className={inter.className + nunito}>{children}</body>
      </html>
    </ThemeProvider>
  );
}
