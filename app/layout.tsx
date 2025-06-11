import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Ecommerce Website',
  description: 'a wbesite that works like amazon',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
