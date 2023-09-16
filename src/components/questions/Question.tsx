import { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';

import vw from '@/styles/utils';
import { QuestionType } from '@/data/questions';

interface Props {
  question: QuestionType;
  index: number;
}

const Question = ({ question, index }: Props) => {
  // start the first one open
  const [open, setOpen] = useState(index === 0 ? true : false);
  const [height, setHeight] = useState(0);

  const $container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    $container.current && setHeight($container.current.scrollHeight);
  }, [$container]);

  const toggleOpen = () => {
    if (!open) {
      $container.current && setHeight($container.current.scrollHeight);
    }
    setOpen(!open);
  };

  return (
    <Root>
      <Wrapper onClick={toggleOpen}>
        <h3>{question.question}</h3>
        <Plus open={open}>
          <span />
          <span />
        </Plus>
      </Wrapper>
      <Container
        ref={$container}
        style={{ maxHeight: open ? `${height}px` : '0px' }}
      >
        <p>{question.answer}</p>
      </Container>
    </Root>
  );
};

const Root = styled.div`
  &:not(:last-of-type) {
    ${vw('margin-bottom', 40)}
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  h3 {
    max-width: 80%;
  }
`;

const Container = styled.div`
  overflow: hidden;
  height: auto;
  transition: ${({ theme }) => theme.transition};
  p {
    ${vw('padding-top', 10)}
  }
`;

type PlusProps = {
  open: boolean;
};

const Plus = styled.div<PlusProps>`
  position: relative;
  ${vw('width', 20)}
  ${vw('height', 20)}
  ${vw('margin-top', 3)}
  span {
    display: block;
    background-color: ${({ theme }) => theme.color.darkPurple};
    transition: ${({ theme }) => theme.transition};
    transform-origin: center;
  }
  span:first-of-type {
    width: 1px;
    height: 100%;
    position: absolute;
    left: 50%;
    top: 0;
    transform: ${({ open }) =>
      open
        ? 'translateX(-50%) rotate(90deg)'
        : 'translateX(-50%) rotate(0deg)'};
  }
  span:last-of-type {
    width: 100%;
    height: 1px;
    position: absolute;
    top: 50%;
    left: 0;
    transform: ${({ open }) =>
      open
        ? 'translateY(-50%) rotate(90deg)'
        : 'translateY(-50%) rotate(0deg)'};
    opacity: ${({ open }) => (open ? 0 : 1)};
  }
`;

export default Question;
