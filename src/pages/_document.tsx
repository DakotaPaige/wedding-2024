import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

import StyledComponentsRegistry from '../lib/registry';

export default function Document() {
  return (
    <Html>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
        {/* <Script src="https://affiliates.expediagroup.com/products/widgets/assets/eg-widgets.js"></Script> */}
      </Head>
      <body>
        <StyledComponentsRegistry>
          <Main />
          <NextScript />
        </StyledComponentsRegistry>
        {/* <script
          className="eg-widgets-script"
          src="https://affiliates.expediagroup.com/products/widgets/assets/eg-widgets.js"
          async
        ></script> */}
      </body>
    </Html>
  );
}
