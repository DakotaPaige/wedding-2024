import styled from 'styled-components';

import vw from '@/styles/utils';
import Link from 'next/link';

interface Props {
  text: string;
  type?: 'button' | 'submit' | 'reset';
  to?: string;
  handleClick?: () => void;
  disabled?: boolean;
}

const Button = ({
  text,
  type,
  to,
  handleClick = () => {},
  disabled,
}: Props) => {
  return (
    <Root
      type={type}
      as={to ? Link : 'button'}
      to={to}
      onClick={handleClick}
      disabled={disabled}
    >
      <p className="nav tan">{text}</p>
    </Root>
  );
};

type RootProps = {
  to?: string;
};

const Root = styled.button<RootProps>`
  position: relative;
  cursor: pointer;
  width: fit-content;
  appearance: none;
  border: none;
  background-color: ${({ theme }) => theme.color.violet};
  transition: ${({ theme }) => theme.transition};
  ${vw('padding-top', 10)}
  ${vw('padding-bottom', 10)}
  ${vw('padding-left', 20)}
  ${vw('padding-right', 20)}
  &:hover {
    background-color: ${({ theme }) => theme.color.darkPurple};
  }
`;
export default Button;
