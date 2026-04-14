import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'KD Evolution',
  description: 'Hub for KD Evolution projects — SkyVenture NH, KD Scoring, Judge Test, and more.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
