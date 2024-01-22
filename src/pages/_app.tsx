import { useEffect, useState } from 'react';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { usePathname } from 'next/navigation';
import { Playfair_Display, Great_Vibes } from 'next/font/google';
import { ThemeProvider } from 'styled-components';
import { useAppDispatch } from '@/components/hooks';
import { ReCaptchaProvider, useReCaptcha } from 'next-recaptcha-v3';

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

  const { loaded } = useReCaptcha();

  useEffect(() => {
    setTimeout(() => dispatch(setIsLoading(false)), 1000);
  }, [pathname, dispatch]);

  useEffect(() => {
    if (loaded) {
      console.log('hello');
      let recaptcha = Array.from(
        document.getElementsByClassName(
          'mat-form-field-infix'
        ) as HTMLCollectionOf<HTMLElement>
      );
      console.log('hello');
      if (recaptcha) {
        console.log('hello');
        recaptcha[0].style.opacity = '0';
      }
    }
  }, [loaded]);

  return (
    <ReCaptchaProvider reCaptchaKey="6LduZT4pAAAAAI_-tKU_pY8sAthu1lXS8QOxjJE1">
      <ThemeProvider theme={theme}>
        <main className={`${Playfair.variable} ${GreatVibes.variable}`}>
          <GlobalStyle />
          <Header />
          <Component {...pageProps} />
          <Footer />
          <Loading />
        </main>
      </ThemeProvider>
    </ReCaptchaProvider>
  );
}

export default wrapper.withRedux(App);
