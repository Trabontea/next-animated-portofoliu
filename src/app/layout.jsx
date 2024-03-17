import { Inter } from 'next/font/google';
import './globals.css';
import TransitionProvider from '@/components/TransitionProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Portfolio App',
  description: 'Animated Portofolio',
};

// Pentru animatie la navigare
// https://www.framer.com/motion/animate-presence/
// Pentru tranzitie vom face alta componenta
// atentie pagina parinte trebuie sa ramana server side

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TransitionProvider>{children}</TransitionProvider>
      </body>
    </html>
  );
}
