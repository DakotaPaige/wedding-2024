import styled from 'styled-components';
import Image from 'next/image';

import Section from '../layout/Section';

import vw from '@/styles/utils';

import Flower4Img from 'src/assets/images/graphics/flower4.png';
import Flower2Img from 'src/assets/images/graphics/flower2.png';

const Intro = () => {
  return (
    <Section moreTopPadding>
      <Flower src={Flower4Img} alt="Flower" />
      <h2 className="center black">We're getting married!</h2>
      <Date className="cursive center black">July 13, 2024</Date>
      <h2 className="center black">
        Grouse Mountain, North Vancouver,
        <br /> British Columbia
      </h2>
      <Flower2 src={Flower2Img} alt="Flower" />
    </Section>
  );
};

const Date = styled.h1`
  ${vw('margin-top', 40, 60, 80)}
  ${vw('margin-bottom', 40, 60, 80)}
`;

const Flower = styled(Image)`
  height: auto;
  position: absolute;
  ${vw('top', -80, -120)}
  ${vw('right', -120, -220)}
  ${vw('width', 400, 600, 1000)}
`;

const Flower2 = styled(Image)`
  height: auto;
  ${vw('width', 300, 520, 800)}
  ${vw('margin-top', 60, 80, 120)}
`;

export default Intro;
