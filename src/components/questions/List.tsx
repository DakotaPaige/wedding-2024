import styled from 'styled-components';

import Question from './Question';

import vw from '@/styles/utils';

import questions from '@/data/questions';

const List = () => {
  return (
    <Root>
      {questions.map((question, index) => (
        <Question question={question} key={index} index={index} />
      ))}
    </Root>
  );
};

const Root = styled.div`
  ${vw('padding-left', 0, 60, 200)}
  ${vw('padding-right', 0, 60, 200)}
`;

export default List;
