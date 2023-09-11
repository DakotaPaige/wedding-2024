import type { AppProps } from 'next/app';
import styled from 'styled-components';

import Header from '@/components/Header';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Root>
      <Header />
      <Component {...pageProps} />
    </Root>
  );
}

const Root = styled.main``;
