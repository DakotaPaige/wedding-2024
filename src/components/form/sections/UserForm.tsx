import styled from 'styled-components';

import Radio from '../Radio';
import Input from '../Input';

import vw from '@/styles/utils';
import { User } from '../form.types';

interface Props {
  user: User[] | null;
  plusOne: boolean;
  hasKids: boolean;
  active: boolean;
  isComing: boolean;
  handlePlusOne: (val: string) => void;
  handleChildren: (val: string) => void;
}

const UserForm = ({
  user,
  handlePlusOne,
  plusOne,
  handleChildren,
  hasKids,
  active,
  isComing,
}: Props) => {
  return (
    <Root style={{ display: active ? 'block' : 'none' }}>
      <>
        <input
          type="hidden"
          name="name"
          value={
            user !== null && user[0]
              ? `${user[0].firstName} ${user[0].lastName}`
              : ''
          }
        />
        <Radio
          name="plusOne"
          id="plusOne"
          label="Will you be bringing a plus one?"
          required={user !== null && user[0] && user[0].plusOne && isComing}
          options={[
            { value: 'Yes', label: `Yes` },
            { value: 'No', label: `No` },
          ]}
          handleChange={handlePlusOne}
          inactive={user !== null && user[0] && !user[0].plusOne}
        />
        <Input
          name="plusOneName"
          id="plusOneName"
          required={plusOne && isComing}
          label="What is the first and last name of your plus one?"
          inactive={!plusOne}
        />
        <Input
          name="diet"
          id="diet"
          label="Do you have any dietary restrictions?"
        />
        <Radio
          name="children"
          id="children"
          label="Do you have kids who would want to come to the wedding?"
          options={[
            { value: 'Yes', label: `Yes` },
            { value: 'No', label: `No` },
          ]}
          handleChange={handleChildren}
        />
        <Input
          name="kidCount"
          id="kidCount"
          label="How many kids who would want to come to the wedding? (12 and under only please)"
          disclaimer="Note: We're unsure yet if we have space for kids, so please let us know through here or direct through email if you need more information."
          inactive={!hasKids}
        />
        <Input
          name="song"
          id="song"
          label="Bonus: What's your favourite song to get you on the dance floor?"
        />
      </>
    </Root>
  );
};

const Root = styled.div`
  width: 100%;
`;

export default UserForm;
