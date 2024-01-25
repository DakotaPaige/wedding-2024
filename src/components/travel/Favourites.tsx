import styled from 'styled-components';

import Section from '../layout/Section';

import vw from '@/styles/utils';
import favourites from '@/data/favourites';

const Favourites = () => {
  return (
    <Section noTopPadding>
      <Root>
        {favourites.map((category) => (
          <Wrapper key={category.category}>
            <h3 className="black">
              <Line />
              {category.category}
            </h3>
            <ul>
              {category.items.map((item) => (
                <li className="black body small" key={item.text}>
                  <Text
                    href={item.link}
                    as={item.link ? 'a' : 'span'}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {item.text}
                  </Text>
                </li>
              ))}
            </ul>
          </Wrapper>
        ))}
      </Root>
    </Section>
  );
};

const Root = styled.div`
  width: 100%;
  display: grid;
  ${vw('padding-left', 0, 0, 120)}
  ${vw('padding-right', 0, 0, 120)}
  ${vw('grid-template-columns', '1fr', 'repeat(3, 1fr)', 'repeat(3, 1fr)')}
  ${vw('margin-top', 20, 40, 40)}
  ${vw('grid-row-gap', 40)}
  ${vw('margin-bottom', 40, 60, 80)}
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  ${vw('align-items', 'flex-start', 'center')}
  ${vw('text-align', 'left', 'center')}
  h3 {
    position: relative;
    display: flex;
    align-items: center;
    ${vw('flex-direction', 'row', 'column')}
    ${vw('margin-bottom', 10, 10, 15)}
  }
  ul {
    display: flex;
    flex-direction: column;
    ${vw('gap', 3, 5)}
  }
  li {
    list-style-type: none;
  }
  a {
    transition: ${({ theme }) => theme.transition};
    &:hover {
      color: ${({ theme }) => theme.color.blue};
    }
  }
`;

const Line = styled.span`
  display: block;
  background-color: ${({ theme }) => theme.color.violet};
  ${vw('margin-right', 10, 0)}
  ${vw('margin-top', 4)}
  ${vw('width', 20, 20, 40)}
  ${vw('height', 2, 2, 3)}
  ${vw('order', '1', '2')}
`;

const Text = styled.a``;

export default Favourites;
