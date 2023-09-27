import './globals.css';
import { ReactNode } from 'react';
import type { Metadata } from 'next';
import { ThemeRegistry } from '@/mui/ThemeRegistry';
import { Header } from '@/components/Header/Header';

export const metadata: Metadata = {
  title: 'Dizi izi',
  description: 'Онлайн-проектирование интерьера',
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
