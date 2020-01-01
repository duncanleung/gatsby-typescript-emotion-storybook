import styled, { CreateStyled } from '@emotion/styled';

type Shades = { light: string; medium: string; dark: string };

export type Theme = {
  color: {
    primary: string;
    secondary: string;
    tertiary: string;
    gray: {
      lightest: string;
      light: string;
      medium: string;
      dark: string;
      darkest: string;
    };
    status: {
      error: {
        light: string;
        medium: string;
        dark: string;
      };
      [index: string]: Shades;
    };
    text: {
      heading: string;
      body: string;
    };
    disabled: string;
  };
  spacing: {
    unit: number;
  };
  shape: {
    borderRadius: {
      small: number;
      medium: number;
      large: number;
    };
  };
};

export default styled as CreateStyled<Theme>;
