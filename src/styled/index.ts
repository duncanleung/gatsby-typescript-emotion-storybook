import styled, { CreateStyled } from "@emotion/styled";

// type Shades = { light: string; medium: string; dark: string };

export type ColorTriad = {
  dark: string;
  accent: string;
  light: string;
};

export type Theme = {
  color: {
    primary: ColorTriad;
    secondary: ColorTriad & {
      darker: string;
      darkest: string;
    };
    // gray: Shades & {
    //   lightest: string;
    //   darkest: string;
    // };
    text: ColorTriad;
  };
  spacing: {
    unit: number;
  };
  shape: {
    borderRadius: {
      button: number;
    };
  };
};

export default styled as CreateStyled<Theme>;
