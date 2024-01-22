import styled from 'styled-components';

import Section from '../layout/Section';

import vw from '@/styles/utils';

interface Props {
  title: string | JSX.Element;
  text: string | JSX.Element;
}

const TitleText = ({ title, text }: Props) => {
  return (
    <Section left>
      <h2 className="black">{title}</h2>
      <Wrapper>
        <p className="black">{text}</p>
      </Wrapper>
      <Line />
    </Section>
  );
};

const Wrapper = styled.div`
  ${vw('text-align', 'left', 'center')}
  ${vw('margin-top', 40, 60, 80)}
`;

const Line = styled.span`
  background-color: ${({ theme }) => theme.color.violet};
  height: 2px;
  ${vw('border-radius', 5)}
  ${vw('width', 80, 120, 180)}
  ${vw('margin-top', 40, 80, 120)}
  ${vw('margin-bottom', 40, 80, 120)}
`;

export default TitleText;
