import styled from 'styled-components';

import { useAppSelector } from './hooks';

import vw from '@/styles/utils';

const Loading = () => {
  const { isLoading } = useAppSelector((state) => state.page);

  // console.log(isLoading);
  return (
    <Root
      style={{
        opacity: isLoading ? 1 : 0,
        pointerEvents: isLoading ? 'all' : 'none',
      }}
    >
      <h1 className="black cursive">Loading...</h1>
    </Root>
  );
};

const Root = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.color.tan};
  transition: ${({ theme }) => theme.transition};
  /* transition-delay: 1s; */
  z-index: 100;
`;

export default Loading;
