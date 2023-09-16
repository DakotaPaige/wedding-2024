import styled from 'styled-components';

import vw from '@/styles/utils';

interface Props {
  title: string;
  text?: string;
}

const Intro = ({ title, text }: Props) => {
  return (
    <Root>
      <h2 className="black center">{title}</h2>
      {text && <h3 className="black center">{text}</h3>}
    </Root>
  );
};

const Root = styled.section`
  ${vw('padding-top', 80, 120, 240)}
  ${vw('padding-bottom', 80, 120, 240)}
`;

export default Intro;
