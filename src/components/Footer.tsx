import Image from 'next/image';
import styled from 'styled-components';

import vw from '@/styles/utils';

import image from '@/assets/images/butt-grab.jpg';

const Footer = () => {
  return (
    <Root>
      <ImageWrapper>
        <Image
          src={image}
          alt="Butt grab"
          placeholder="blur"
          quality={100}
          fill
          style={{
            objectFit: 'cover',
          }}
        />
      </ImageWrapper>
      <Container>
        <div>
          <h3>Jay & Dakota</h3>
          <p>July 13, 2024</p>
        </div>
        <Wrapper>
          <p>&copy; {new Date().getFullYear()} Jay & Dakota</p>
          <p>
            Made with 💜 by{' '}
            <a href="https://dakotamauza.com/" target="_blank" rel="noopener">
              Dakota
            </a>
          </p>
        </Wrapper>
      </Container>
    </Root>
  );
};

const Root = styled.footer`
  ${vw('margin-top', 60, 120, 240)}
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  ${vw('height', 200, 340, 620)}
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  ${vw('padding-top', 40, 60)}
  ${vw('padding-bottom', 40, 60)}
  ${vw('padding-left', 20, 40, 120)}
  ${vw('padding-right', 20, 40, 120)}
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export default Footer;
