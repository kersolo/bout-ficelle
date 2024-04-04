'use client';
import { ThemeProvider } from '@material-tailwind/react';
import '../../material-tailwind.d.ts';
import './globals.css';
import { NavbarDefault } from './components/NavbarDefault';
import { themeProvider } from './services/theme/themeProvider';

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider value={themeProvider}>
      <html lang="fr">
        <body>
          <NavbarDefault />
          {children}
        </body>
      </html>
    </ThemeProvider>
  );
}
