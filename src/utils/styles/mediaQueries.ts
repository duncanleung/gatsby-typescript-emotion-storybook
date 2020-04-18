/* eslint-disable import/prefer-default-export */

import { css, SerializedStyles } from "@emotion/core";
import breakpoints, { BreakpointsShape } from "./breakpoints";

const getBreakpoint = (key: keyof BreakpointsShape) => breakpoints[key];

/**
 * @function above
 * @param {string} breakpoint
 * @param {string} className - generated className from emotion. In practice this will be a template string containing the styles.
 *
 * @returns {string} mediaQueryStyles
 */
export const above = (
  breakpoint: keyof BreakpointsShape,
  className: SerializedStyles
) => css`
  @media (min-width: ${getBreakpoint(breakpoint)}px) {
    ${className};
  }
`;

export const between = (
  from: keyof BreakpointsShape,
  to: keyof BreakpointsShape,
  className: SerializedStyles
) => css`
  @media (min-width: ${getBreakpoint(from)}px) and (max-width: ${getBreakpoint(
      to
    )}px) {
    ${className}
  }
`;
