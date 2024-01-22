import { PropsWithChildren } from 'react';
import styled from 'styled-components';

import vw from '@/styles/utils';

interface Props {
  left?: boolean;
  moreTopPadding?: boolean;
  noTopPadding?: boolean;
}

const Section = ({
  children,
  left,
  moreTopPadding,
  noTopPadding,
}: PropsWithChildren<Props>) => {
  return (
    <Root
      left={left}
      moreTopPadding={moreTopPadding}
      noTopPadding={noTopPadding}
    >
      {children}
    </Root>
  );
};

type RootProps = {
  left?: boolean;
  moreTopPadding?: boolean;
  noTopPadding?: boolean;
};

const Root = styled.section<RootProps>`
  position: relative;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  ${({ left }) =>
    left
      ? vw('align-items', 'flex-start', 'center')
      : vw('align-items', 'center')}
  ${({ moreTopPadding, noTopPadding }) =>
    noTopPadding
      ? vw('padding-top', 0)
      : moreTopPadding
      ? vw('padding-top', 180, 240, 360)
      : vw('padding-top', 60, 120, 240)}
  ${vw('padding-left', 20, 40, 120)}
  ${vw('padding-right', 20, 40, 120)}
`;

export default Section;
