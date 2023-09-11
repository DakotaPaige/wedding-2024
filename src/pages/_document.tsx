import { Html, Head, Main, NextScript, DocumentContext } from 'next/document';
import { ThemeProvider, ServerStyleSheet } from 'styled-components';

import StyledComponentsRegistry from '../lib/registry';

import GlobalStyle from '@/styles/global';
import theme from '@/styles/theme';

export default function Document() {
  return (
    <Html>
      <Head />
      <body>
        <StyledComponentsRegistry>
          <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Main />
            <NextScript />
          </ThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </Html>
  );
}
