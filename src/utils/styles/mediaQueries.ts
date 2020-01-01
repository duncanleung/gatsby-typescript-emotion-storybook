/* eslint-disable import/prefer-default-export */

import { css, SerializedStyles } from '@emotion/core';
import breakpoints from './breakpoints';

const getBreakpoint = (key: string) => breakpoints[key];

/**
 * @function above
 * @param {string} breakpoint
 * @param {string} className - generated className from emotion. In practice this will be a template string containing the styles.
 *
 * @returns {string} mediaQueryStyles
 */
export const above = (breakpoint: string, className: SerializedStyles) => css`
  @media (min-width: ${getBreakpoint(breakpoint)}px) {
    ${className};
  }
`;
