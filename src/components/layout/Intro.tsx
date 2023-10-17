import styled from 'styled-components';
import Image from 'next/image';

import vw from '@/styles/utils';

import FlowerImg from '@/assets/images/graphics/flower2.png';

interface Props {
  title: string;
  text?: string | JSX.Element;
  cursive?: boolean;
}

const Intro = ({ title, text, cursive }: Props) => {
  return (
    <Root>
      <h2 className="black center">{title}</h2>
      {text && (
        <h3 className={`black center ${cursive && 'cursive'}`}>{text}</h3>
      )}
      <Flower src={FlowerImg} alt="Flower" />
    </Root>
  );
};

const Root = styled.section`
  ${vw('padding-top', 80, 200, 320)}
  ${vw('padding-left', 20, 40, 120)}
  ${vw('padding-right', 20, 40, 120)}
  h2 {
    ${vw('margin-bottom', 40, 60, 80)}
  }
`;

const Flower = styled(Image)`
  height: auto;
  margin-left: auto;
  margin-right: auto;
  ${vw('width', 300, 520, 800)}
  ${vw('margin-top', 60, 80, 120)}
`;

export default Intro;
