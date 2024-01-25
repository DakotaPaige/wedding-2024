import { PropsWithChildren } from 'react';
import styled from 'styled-components';

import vw from '@/styles/utils';

interface Props {
  left?: boolean;
  moreTopPadding?: boolean;
  lessTopPadding?: boolean;
  noTopPadding?: boolean;
}

const Section = ({
  children,
  left,
  moreTopPadding,
  lessTopPadding,
  noTopPadding,
}: PropsWithChildren<Props>) => {
  return (
    <Root
      left={left}
      moreTopPadding={moreTopPadding}
      lessTopPadding={lessTopPadding}
      noTopPadding={noTopPadding}
    >
      {children}
    </Root>
  );
};

type RootProps = {
  left?: boolean;
  moreTopPadding?: boolean;
  lessTopPadding?: boolean;
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
  ${({ moreTopPadding, noTopPadding, lessTopPadding }) =>
    noTopPadding
      ? vw('padding-top', 0)
      : moreTopPadding
      ? vw('padding-top', 180, 240, 360)
      : lessTopPadding
      ? vw('padding-top', 40, 60, 120)
      : vw('padding-top', 60, 120, 180)}
  ${vw('padding-left', 20, 40, 120)}
  ${vw('padding-right', 20, 40, 120)}
`;

export default Section;
