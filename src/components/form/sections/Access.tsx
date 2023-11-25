import { useState } from 'react';
import styled from 'styled-components';

import Input from '../Input';
import Button from '@/components/Button';

import vw from '@/styles/utils';

interface Props {
  handleActivation: (val: string) => void;
  active: boolean;
}

const Access = ({ handleActivation, active }: Props) => {
  const [val, setVal] = useState('');

  return (
    <Root style={{ display: active ? 'flex' : 'none' }}>
      <Input
        name="activation"
        id="activation"
        label="Please enter the access code"
        handleChange={(val) => {
          handleActivation(val);
          setVal(val);
        }}
      />
      <Button handleClick={() => handleActivation(val)} text="Submit" />
    </Root>
  );
};

const Root = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* ${vw('width', 320, 600)} */
  ${vw('padding-top', 40, 80, 160)}
  ${vw('padding-left', 20, 60, 400)}
  ${vw('padding-right', 20, 60, 400)}
`;

export default Access;
