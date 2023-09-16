import type { AppProps } from 'next/app';
import { Playfair_Display, Great_Vibes } from 'next/font/google';
import { ThemeProvider } from 'styled-components';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

import GlobalStyle from '@/styles/global';
import theme from '@/styles/theme';

export const Playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--playfair-display',
});
export const GreatVibes = Great_Vibes({
  weight: '400',
  subsets: ['latin'],
  variable: '--great-vibes',
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <main className={`${Playfair.variable} ${GreatVibes.variable}`}>
        <GlobalStyle />
        <Header />
        <Component {...pageProps} />
        <Footer />
      </main>
    </ThemeProvider>
  );
}
