import styled from 'styled-components';

import vw, { vwMobile } from '@/styles/utils';

interface Props {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

const Hamburger = ({ isMenuOpen, toggleMenu }: Props) => {
  return (
    <Root onClick={toggleMenu} active={isMenuOpen}>
      <span />
      <span />
      <span />
    </Root>
  );
};

type RootProps = {
  active: boolean;
};

const Root = styled.div<RootProps>`
  position: absolute;
  transform: translateY(-50%);
  top: 50%;
  z-index: 10;
  ${vw('right', 20)}
  ${vw('width', 30)}
  ${vw('height', 20)}
  ${vw('display', 'block', 'none')}
  span {
    position: absolute;
    display: block;
    width: 100%;
    background-color: ${({ theme }) => theme.color.darkPurple};
    transition: ${({ theme }) => theme.transition};
    ${vw('border-radius', 5)}
    ${vw('height', 3)}
  }
  span:first-of-type {
    opacity: ${({ active }) => (active ? 0 : 1)};
    transition-delay: 0.4s;
    transition-duration: 0s;
  }
  span:nth-of-type(2) {
    left: ${({ active }) => (active ? vwMobile(5) : 0)};
    top: ${({ active }) => (active ? 0 : 'calc(50% - 1.5px)')};
    transform-origin: top left;
    transform: ${({ active }) => (active ? 'rotate(45deg)' : 'rotate(0deg)')};
    transition-property: transform, top, left;
    transition-duration: 0.2s, 0.4s, 0.2s;
    transition-delay: ${({ active }) =>
      active ? '0.4s, 0s, 0.4s' : '0s, 0.4s, 0s'};
    /* width: ${({ active }) => (active ? vwMobile(30) : '100%')}; */
  }
  span:last-of-type {
    right: ${({ active }) => (active ? vwMobile(5) : 0)};
    top: ${({ active }) => (active ? 0 : 'calc(100% - 3px)')};
    transform-origin: top right;
    transform: ${({ active }) => (active ? 'rotate(-45deg)' : 'rotate(0deg)')};
    transition-property: transform, top, right;
    transition-duration: 0.2s, 0.4s, 0.2s;
    transition-delay: ${({ active }) =>
      active ? '0.4s, 0s, 0.4s' : '0s, 0.4s, 0s'};
    /* width: ${({ active }) => (active ? vwMobile(30) : '100%')}; */
  }
`;

export default Hamburger;
