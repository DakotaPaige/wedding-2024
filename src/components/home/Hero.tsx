import styled from 'styled-components';
import Image from 'next/image';

import vw from '@/styles/utils';

import image from '@/assets/images/D&J-ENG-17.jpg';

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
          objectPosition: 'center 65%',
        }}
      />
      <h1 className="tan cursive">Jay & Dakota</h1>
      <Gradient />
    </Root>
  );
};

const Root = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  ${vw('height', 360, 512, '100vh')}
  ${vw('padding-bottom', 40, 50, 60)}
  h1 {
    position: relative;
    z-index: 2;
  }
`;

const Gradient = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
  background: linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.5));
  ${vw('height', 200)}
`;

export default Hero;
