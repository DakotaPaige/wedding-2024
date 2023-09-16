import styled from 'styled-components';

import Section from '../layout/Section';

import vw from '@/styles/utils';

const Info = () => {
  return (
    <Section left>
      <h2 className="black">
        Welcome to
        <br className="mobile-only" /> our wedding website!
      </h2>
      <Wrapper>
        <p className="black">
          We are getting married!
          <br />
          <br />
          We are on cloud nine and we want to share our excitement with you.
          <br />
          <br />
          In anticipation of the big day, we have created this wedding website
          to keep you up-to-date on the details of our wedding and to share
          information about ourselves with you.
          <br />
          <br />
          Please RSVP in the attendance section as soon as possible, so we know
          whether to expect you at our wedding.
          <br />
          <br />
          Enjoy the site and see you soon!
        </p>
      </Wrapper>
    </Section>
  );
};

const Wrapper = styled.div`
  ${vw('text-align', 'left', 'center')}
`;

export default Info;
