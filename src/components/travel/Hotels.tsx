import Script from 'next/script';

import { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';

import vw from '@/styles/utils';

const Hotels = () => {
  return (
    <Root>
      <h2 className="black">Expedia Lookup</h2>
      <p className="black main">
        Have a look on Expedia for accomodation & flights right to North
        Vancouver.
      </p>
      {/* This is the iframe expedia rendered with their script, nothing work work to make the script work in a NextJS application. */}
      <iframe
        className="eg-widget-frame eg-search-widget-frame"
        src="https://affiliates.expediagroup.com/products/widgets/search-widget?program=ca-expedia&amp;lobs=stays%2Cflights&amp;network=pz&amp;camref=1101lSTZK&amp;instance=lrqzp5r45afnr3tyj4s"
        style={{
          width: '100%',
          height: '100%',
          margin: 'auto',
          border: 'none',
        }}
      >
        <div />
      </iframe>
    </Root>
  );
};

const Root = styled.div`
  position: relative;
  height: auto;
  ${vw('width', '100%', '100%', '50%')}
  ${vw('height', 700, 500, 600)}
  ${vw('padding-left', 0, 0, 40)}
  ${vw('margin-top', 20, 40, 0)}
  .eg-widget {
    width: 100%;
    height: 100%;
  }
  .main {
    ${vw('margin-top', 20)}
    ${vw('margin-bottom', 20, 40)}
  }
`;

export default Hotels;
