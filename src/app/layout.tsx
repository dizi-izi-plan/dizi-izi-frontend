import './globals.css';
import { ReactNode } from 'react';
import type { Metadata } from 'next';
import { ThemeRegistry } from '../mui/ThemeRegistry';
import { Header } from '@/components/Header/Header';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <ThemeRegistry options={{ key: 'mui' }}>
      <html lang="en">
        <body>
          <Header />
          {children}
        </body>
      </html>
    </ThemeRegistry>
  );
}
