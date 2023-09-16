import styled from 'styled-components';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import vw from '@/styles/utils';

import nav, { NavType } from '@/data/nav';

interface Props {
  active: boolean;
  closeMenu: () => void;
}

const MobileMenu = ({ active, closeMenu }: Props) => {
  const pathname = usePathname();
  return (
    <Root style={{ transform: active ? 'translateX(0)' : 'translateX(100%)' }}>
      {nav.map((item: NavType) => (
        <StyledLink
          href={item.to}
          key={item.to}
          active={pathname === item.to}
          onClick={closeMenu}
          className="nav black"
        >
          {item.text}
        </StyledLink>
      ))}
    </Root>
  );
};

const Root = styled.div`
  position: fixed;
  right: 0;
  top: 0;
  background-color: ${({ theme }) => theme.color.tan};
  transition: ${({ theme }) => theme.transition};
  z-index: 5;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  ${vw('width', '80%')}
  ${vw('display', 'flex', 'none')}
  ${vw('padding-left', 20)}
  ${vw('padding-right', 20)}
  ${vw('padding-top', 40)}
  ${vw('padding-bottom', 40)}
`;

type LinkProps = {
  active: boolean;
};

const StyledLink = styled(Link)<LinkProps>`
  position: relative;
  display: block;
  width: fit-content;
  &:not(:last-of-type) {
    ${vw('margin-bottom', 10)}
  }
  &::after {
    content: '';
    width: 100%;
    height: 1px;
    background-color: ${({ theme }) => theme.color.black};
    transform: ${({ active }) => (active ? 'scaleX(1)' : 'scaleX(0)')};
    transform-origin: center;
    transition: ${({ theme }) => theme.transition};
    position: absolute;
    top: 100%;
    left: 0;
  }
`;

export default MobileMenu;
