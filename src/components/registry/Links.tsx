import styled from 'styled-components';

import Section from '../layout/Section';
import Button from '../Button';

import vw from '@/styles/utils';

const Links = () => {
  return (
    <Section>
      <Root>
        <p>
          Thanks for thinking of us! We've registered on Amazon and Canadian
          Tire. Please follow the links below to head to our registry. Access
          codes will be sent by email, please contact us if you haven't received
          it.
          <br />
          <br />
          If you prefer to go the good old fashioned way, we will also be
          accepting gift funds toward our honeymoon at the reception.
        </p>
        <Container>
          <Button
            text="Amazon"
            href="https://www.amazon.ca/wedding/share/Jay-and-Dakota"
          />
          <Button
            text="Canadian Tire"
            href="https://www.myregistry.com/giftlist/jay-and-dakota"
          />
        </Container>
      </Root>
    </Section>
  );
};

const Root = styled.div`
  > p {
    ${vw('text-align', 'left', 'center')}
    ${vw('max-width', '100%', '100%', 1000)}
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  ${vw('align-items', 'flex-start', 'center')}
  ${vw('gap', 20)}
    ${vw('margin-top', 20, 40)}
`;

export default Links;
