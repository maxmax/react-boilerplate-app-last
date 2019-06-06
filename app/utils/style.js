import { css, keyframes } from 'styled-components';

const defaultStyles = {
  primaryFontFamily: '"Open Sans", sans-serif',
  primaryFontSize: '16px',
};

const hexToRgb = hex => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

  return result
    ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16),
    }
    : null;
};

const sizes = {
  xl: 1400,
  lg: 1200,
  md: 992,
  sm: 768,
  xs: 576,
};

const media = ['xl', 'lg', 'md', 'sm', 'xs'].reduce((accumulator, label) => {
  /* eslint-disable no-param-reassign */
  accumulator[label] = (...args) => css`
    @media (min-width: ${sizes[label]}px) {
      ${css(...args)};
    }
  `;
  /* eslint-enable no-param-reassign */
  return accumulator;
}, {});

media.xs = (...args) => css`
  @media (max-width: ${sizes.sm - 1}px) {
    ${css(...args)};
  }
`;

const Fonts = {
  Times: 'Times, "Times New Roman", serif',
  OpenSans: 'Open Sans, "Helvetica Neue", Helvetica, Arial, sans-serif',
  Arial: 'Arial, Helvetica, sans-serif',
};

// const brand1 = #343a40;
// $gray-900: rgba(0, 0, 0, 0.95);
// brand: '#23abd1',

const Colors = {
  brand: '#2959a5',
  brand800: 'rgba(0, 0, 0, 0.8)',
  brandDark: '#09728f',
  brandDarked: '#0da1cb',
  primary: '#17a2b8',
  white: '#ffffff',
  white3: 'rgba(255, 255, 255, .2)',
  white5: 'rgba(255, 255, 255, .5)',
  black3: 'rgba(0, 0, 0, .3)',
  dark: 'rgba(2, 2, 2, 0.9)',
  darkAuto: '#313131',
  darkLight: '#020202',
  panelGrey: '#ececec',
  panelCopy: '#2f2f2f',
  backgroundGrey: '#f2f3f3',
  backgroundLight: '#fafafa',
  greyCopy: '#aea9a9',
  danger: '#ff0000', // TO EDIT
  gray: '#cccaca',
  primaryFaded: '#25a1c0', // TO EDIT
  sampleRed: '#dc3545',
  defSuccess: '#28a745',
  defError: '#dc3545',
  loadingBg: '#cccccc',
};

export function fadeOut({ startOpacity }) {
  return keyframes`
    0% {
      opacity: ${startOpacity || 1};
      visibility: visible;
    }
    100% {
      opacity: 0;
      visibility: hidden;
    }
  `;
}

export function rotate() {
  return keyframes`
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  `;
}

export { defaultStyles, hexToRgb, sizes, media, Colors, Fonts };
