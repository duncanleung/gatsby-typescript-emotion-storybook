interface BreakpointsShape {
  [sm: string]: number;
  md: number;
  lg: number;
  xl: number;
}

const breakpoints: BreakpointsShape = {
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
};

export default breakpoints;
