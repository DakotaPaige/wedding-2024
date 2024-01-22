import React from 'react';
import styled from 'styled-components';

import vw, { vwMobile, vwTablet, vwDesktop } from '@/styles/utils';
import media from '@/styles/media';

export interface PointProps {
  text: string;
  active: boolean;
  handleClick: () => void;
  lat: number;
  lng: number;
  index: number;
}

const Point = ({ active, handleClick, lat, lng, index, text }: PointProps) => {
  return (
    <Root
      active={active}
      onClick={handleClick}
      lat={lat}
      lng={lng}
      className="poi-container"
    >
      <p className="poi">{index + 1}</p>
      <Wrapper active={active} className="point-wrapper">
        <p className="map-point">{text}</p>
      </Wrapper>
    </Root>
  );
};

type RootProps = {
  active: boolean;
  lat: number;
  lng: number;
};

const Root = styled.div<RootProps>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.color.violet};
  transition: 0.4s ease;
  background-color: ${({ theme, active }) =>
    active ? theme.color.violet : 'white'};
  z-index: ${(props) => (props.active ? 2 : 1)};
  ${vw('width', 16, 24)}
  ${vw('height', 16, 24)}
  .poi {
    color: ${({ active, theme }) => (active ? 'white' : theme.color.violet)};
  }
`;

type WrapperProps = {
  active: boolean;
};

const Wrapper = styled.div<WrapperProps>`
  opacity: ${(props) => (props.active ? 1 : 0)};
  pointer-events: ${(props) => (props.active ? 'all' : 'none')};
  transition: 0.4s ease;
  position: absolute;
  bottom: ${`calc(100% + ${vwMobile(8)})`};
  background-color: ${({ theme }) => theme.color.violet};
  text-align: center;
  width: fit-content;
  ${vw('padding-top', 5, 7)}
  ${vw('padding-bottom', 5, 7)}
  ${vw('padding-left', 3, 6, 20)}
  ${vw('padding-right', 3, 20)}
  ${vw('min-width', 93, 162)}
  ${vw('max-width', 130, 200)}
  &::after {
    content: '';
    width: 0;
    height: 0;
    border-style: solid;
    border-color: ${({ theme }) => theme.color.violet} transparent transparent
      transparent;
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    ${vw('border-top-width', 6, 8)}
    ${vw('border-right-width', 6, 7)}
    ${vw('border-left-width', 6, 7)}
  }
  @media ${media.tablet} {
    bottom: ${`calc(100% + ${vwTablet(10)})`};
  }
  @media ${media.desktop} {
    bottom: ${`calc(100% + ${vwDesktop(10)})`};
  }
`;

export default Point;
