import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Colors } from 'utils/style';

const cycle = keyframes`
  0%,
  80%,
  100% {
    box-shadow: 0 0;
    height: 2em;
  }
  40% {
    box-shadow: 0 -2em;
    height: 3em;
  }
`;

const Loader = styled.div`
  background: ${Colors.primary};
  animation: ${cycle} 1s infinite ease-in-out;
  width: 1em;
  height: 2em;

  &::before,
  &::after {
    background: ${Colors.primary};
    animation: ${cycle} 1s infinite ease-in-out;
    width: 1em;
    height: 2em;
    position: absolute;
    top: 0;
    content: '';
  }

  color: ${Colors.primary};
  text-indent: -9999em;
  margin: ${props => props.margin || '88px'} auto;
  position: relative;
  font-size: 11px;
  transform: translateZ(0);
  animation-delay: -0.16s;

  &::before {
    left: -1.5em;
    animation-delay: -0.32s;
  }
  &::after {
    left: 1.5em;
  }
`;

export const LoaderOverlay = styled.div`
  position: absolute;
  z-index: 999;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${props =>
    !props.transparent ? 'rgba(255, 255, 255, 0.5)' : 'initial'};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Loader;
