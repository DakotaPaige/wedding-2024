import styled from 'styled-components';

import vw from '@/styles/utils';

const EmailError = () => {
  return (
    <Root>
      <p className="black center">
        Sorry, we can't find a guest matching that email. Please try again, or
        contact us directly at{' '}
        <a href="mailto:simeone.mauza@gmail.com">simeone.mauza@gmail.com</a> to
        resolve the issue.
      </p>
    </Root>
  );
};

const Root = styled.div``;

export default EmailError;
