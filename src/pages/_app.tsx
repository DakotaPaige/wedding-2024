import { useEffect, useState } from 'react';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { usePathname } from 'next/navigation';
import { Playfair_Display, Great_Vibes } from 'next/font/google';
import { ThemeProvider } from 'styled-components';
import { useAppDispatch } from '@/components/hooks';

import Header from '@/components/header/Header';
import Footer from '@/components/Footer';
import Loading from '@/components/Loading';

import GlobalStyle from '@/styles/global';
import theme from '@/styles/theme';
import { setIsLoading } from '@/redux/page';
import { wrapper } from '@/redux/store';

export const Playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--playfair-display',
});
export const GreatVibes = Great_Vibes({
  weight: '400',
  subsets: ['latin'],
  variable: '--great-vibes',
});

function App({ Component, pageProps }: AppProps) {
  const dispatch = useAppDispatch();
  const pathname = usePathname();

  useEffect(() => {
    setTimeout(() => dispatch(setIsLoading(false)), 1000);
  }, [pathname, dispatch]);

  return (
    <ThemeProvider theme={theme}>
      <main className={`${Playfair.variable} ${GreatVibes.variable}`}>
        <GlobalStyle />
        <Header />
        <Component {...pageProps} />
        <Footer />
        <Loading />
      </main>
    </ThemeProvider>
  );
}

export default wrapper.withRedux(App);
