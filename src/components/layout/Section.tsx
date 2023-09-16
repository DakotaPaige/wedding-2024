import { PropsWithChildren } from 'react';
import styled from 'styled-components';

import vw from '@/styles/utils';

interface Props {
  left?: boolean;
}

const Section = ({ children, left }: PropsWithChildren<Props>) => {
  return <Root left={left}>{children}</Root>;
};

type RootProps = {
  left?: boolean;
};

const Root = styled.section<RootProps>`
  display: flex;
  flex-direction: column;
  ${({ left }) =>
    left
      ? vw('align-items', 'flex-start', 'center')
      : vw('align-items', 'center')}
  ${vw('padding-top', 60, 120, 240)}
  ${vw('padding-bottom', 60, 120, 240)}
  ${vw('padding-left', 20, 40, 120)}
  ${vw('padding-right', 20, 40, 120)}
`;

export default Section;
