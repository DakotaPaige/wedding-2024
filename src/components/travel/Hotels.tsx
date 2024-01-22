import Script from 'next/script';

import { useEffect } from 'react';
import styled from 'styled-components';

import vw from '@/styles/utils';

const Hotels = () => {
  // useEffect(() => {
  //   // Your script to inject the iframe
  //   const script = document.createElement('script');
  //   script.src =
  //     'https://affiliates.expediagroup.com/products/widgets/assets/eg-widgets.js';
  //   script.className = 'eg-widgets-script';
  //   script.async = true;
  //   document.body.appendChild(script);
  // }, []);

  return (
    <Root>
      <Script
        className="eg-widgets-script"
        src="https://affiliates.expediagroup.com/products/widgets/assets/eg-widgets.js"
      ></Script>
      <div
        className="eg-widget"
        data-widget="search"
        data-program="ca-expedia"
        data-lobs="stays,flights"
        data-network="pz"
        data-camref="1101lSTZK"
      ></div>
    </Root>
  );
};

const Root = styled.div`
  position: relative;
  ${vw('width', '100%', '100%', '50%')}
`;

export default Hotels;
