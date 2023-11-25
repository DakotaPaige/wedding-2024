import styled from 'styled-components';

import vw from '@/styles/utils';

interface Props {
  label: string;
  name: string;
  id: string;
  options: { label: string; value: string }[];
  required?: boolean;
  handleChange?: (val: string) => void;
  inactive?: boolean;
}

const Radio = ({
  label,
  name,
  id,
  options,
  required,
  handleChange,
  inactive,
}: Props) => {
  return (
    <Root style={{ display: inactive ? 'none' : 'block' }}>
      <p>
        {label} {required && '*'}
      </p>
      {options.map((option, index) => (
        <Container key={index}>
          <input
            type="radio"
            id={`${id}-${index}`}
            name={name}
            value={option.value}
            required={required}
            onChange={
              handleChange ? (e) => handleChange(e.target.value) : () => {}
            }
          />
          <span />
          <label htmlFor={`${id}-${index}`}>{option.label}</label>
        </Container>
      ))}
    </Root>
  );
};

const Root = styled.div`
  width: 100%;
  ${vw('margin-bottom', 20, 40)}
  p {
    ${vw('margin-bottom', 10, 15)}
  }
`;

const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  ${vw('padding-left', 40, 40, 55)}
  ${vw('height', 25, 25, 35)}
  &:not(:last-of-type) {
    ${vw('margin-bottom', 5, 10)}
  }
  input {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    cursor: pointer;
    ${vw('width', 25, 25, 35)}
    ${vw('height', 25, 25, 35)}
  }
  label {
    cursor: pointer;
  }
  span {
    position: absolute;
    top: 0;
    left: 0;
    pointer-events: none;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.color.tan};
    border: 1px solid ${({ theme }) => theme.color.darkPurple};
    ${vw('width', 25, 25, 35)}
    ${vw('height', 25, 25, 35)}
    &::after {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background-color: ${({ theme }) => theme.color.violet};
      border-radius: 50%;
      opacity: 0;
      transition: ${({ theme }) => theme.transition};
      ${vw('width', 15, 15, 20)}
      ${vw('height', 15, 15, 20)}
    }
  }
  input:checked ~ span::after {
    opacity: 1;
  }
`;

export default Radio;
