import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styled from 'styled-components';

import vw from '@/styles/utils';

import nav from '@/data/nav';

const Header = () => {
  const pathname = usePathname();
  return (
    <Root>
      <Link href="/">
        <h3 className="cursive black">J + D</h3>
      </Link>
      <Container>
        {nav.map((item) => (
          <StyledLink
            href={item.to}
            key={item.text}
            active={pathname === item.to}
          >
            <p>{item.text}</p>
          </StyledLink>
        ))}
      </Container>
    </Root>
  );
};

const Root = styled.header`
  position: fixed;
  background-color: ${({ theme }) => theme.color.tan};
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 5;
  ${vw('flex-direction', 'row', 'column')}
  ${vw('padding-top', 10, 20)}
  ${vw('padding-bottom', 10, 20)}
`;

const Container = styled.div`
  align-items: center;
  ${vw('margin-top', 20)}
  ${vw('display', 'none', 'flex')}
`;

type LinkProps = {
  active: boolean;
};

const StyledLink = styled(Link)<LinkProps>`
  position: relative;
  display: block;
  &::after {
    content: '';
    width: 100%;
    height: 1px;
    background-color: ${({ theme }) => theme.color.black};
    transform: ${({ active }) => (active ? 'scaleX(1)' : 'scaleX(0)')};
    transform-origin: center;
    transition: ${({ theme }) => theme.transition};
  }
  &:hover::after {
    transform: scaleX(1);
  }
`;

export default Header;
