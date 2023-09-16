import styled from 'styled-components';
import Image from 'next/image';

import vw from '@/styles/utils';

import image from '@/assets/images/holding-hands-forest.jpg';

const Hero = () => {
  return (
    <Root>
      <Image
        src={image}
        alt="Dakota and Jay holding hands"
        placeholder="blur"
        quality={100}
        fill
        style={{
          objectFit: 'cover',
        }}
      />
      <h1 className="tan cursive">Jay & Dakota</h1>
    </Root>
  );
};

const Root = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  ${vw('height', 360, 512, '100vh')}
  ${vw('padding-bottom', 60, 60, 240)}
  h1 {
    position: relative;
    z-index: 2;
  }
`;

export default Hero;
