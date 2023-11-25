import styled from 'styled-components';

import vw from '@/styles/utils';

interface Props {
  label: string;
  id: string;
  name: string;
  type?: string;
  disclaimer?: string;
  required?: boolean;
  handleChange?: (val: string) => void;
  disabled?: boolean;
  inactive?: boolean;
}

const Input = ({
  label,
  id,
  name,
  type = 'text',
  required,
  disclaimer,
  handleChange,
  disabled,
  inactive,
}: Props) => {
  return (
    <Root disabled={disabled} style={{ display: inactive ? 'none' : 'block' }}>
      <label htmlFor={id} className="black">
        {label} {required && '*'}
      </label>
      {disclaimer && <p className="small black">{disclaimer}</p>}
      <input
        id={id}
        name={name}
        type={type}
        required={required}
        onChange={handleChange ? (e) => handleChange(e.target.value) : () => {}}
      />
      <span />
    </Root>
  );
};

type RootProps = {
  disabled?: boolean;
};

const Root = styled.div<RootProps>`
  position: relative;
  width: 100%;
  transition: ${({ theme }) => theme.transition};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  pointer-events: ${({ disabled }) => (disabled ? 'none' : 'all')};
  ${vw('margin-bottom', 20, 40)}
  label {
    display: block;
  }
  input {
    display: flex;
    align-items: center;
    width: 100%;
    background-color: transparent;
    border: none;
    color: ${({ theme }) => theme.color.black};
    border-bottom: 1px solid ${({ theme }) => theme.color.black};
    ${vw('height', 40, 50)}
    ${vw('margin-top', 10)}
    &:focus {
      outline: none;
      ~ span {
        transform: scaleX(1);
      }
    }
    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus,
    &:-webkit-autofill:active {
      -webkit-box-shadow: 0 0 0px 1000px transparent inset;
      transition: background-color 5000s ease-in-out 0s;
      background-color: transparent !important;
      // Adjust the following to the color of the input text
      -webkit-text-fill-color: ${({ theme }) => theme.color.black};
    }
  }
  span {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: ${({ theme }) => theme.color.black};
    transform: scaleX(0);
    transform-origin: left;
    transition: ${({ theme }) => theme.transition};
  }
  .small {
    ${vw('margin-top', 5)}
  }
`;

export default Input;
