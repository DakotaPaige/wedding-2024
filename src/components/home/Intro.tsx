import styled from 'styled-components';

import Section from '../layout/Section';

import vw from '@/styles/utils';

const Intro = () => {
  return (
    <Section>
      <h2 className="center black">We're getting married!</h2>
      <Date className="cursive center black">July 13, 2024</Date>
      <h2 className="center black">
        North Vancouver,
        <br className="mobile-only" /> British Columbia
      </h2>
    </Section>
  );
};

const Date = styled.h1`
  ${vw('margin-top', 40, 60, 80)}
  ${vw('margin-bottom', 40, 60, 80)}
`;

export default Intro;
