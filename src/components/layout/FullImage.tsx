import styled from 'styled-components';
import Image from 'next/image';

import Section from './Section';

import vw from '@/styles/utils';

interface Props {
  img: {
    src: string;
    alt: string;
  };
  caption?: string;
}

const FullImage = ({ img, caption }: Props) => {
  return (
    <Section noTopPadding>
      <Root>
        <Image src={img.src} alt={img.alt} />
        {caption && <p className="caption black">{caption}</p>}
      </Root>
    </Section>
  );
};

const Root = styled.div`
  width: 100%;
  img {
    width: 100%;
    height: auto;
  }
  p {
    ${vw('margin-top', 8)}
  }
`;

export default FullImage;
