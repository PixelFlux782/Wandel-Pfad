import type { Metadata } from 'next';
import { Inter, Cormorant_Garamond } from 'next/font/google';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans', display: 'swap' });
const cormorant = Cormorant_Garamond({ subsets: ['latin'], weight: ['400', '500', '600', '700'], variable: '--font-serif', display: 'swap' });

export const metadata: Metadata = {
  title: 'Wandel:Pfad | Raum für Wandel. Begleitung mit Tiefe.',
  description: 'Ruhevolle, körperorientierte Begleitung für Menschen in Phasen von Stress, Erschöpfung und innerer Unruhe.',
  metadataBase: new URL('https://wandel-pfad.de'),
  openGraph: {
    title: 'Wandel:Pfad',
    description: 'Raum für Wandel. Begleitung mit Tiefe.',
    url: new URL('https://wandel-pfad.de'),
    siteName: 'Wandel:Pfad',
    images: ['/og-image.svg'],
    type: 'website'
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={`${inter.variable} ${cormorant.variable}`}>
      <body className="min-h-screen bg-background text-text antialiased">
        <div className="relative">
          <SiteHeader />
          <main>{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
