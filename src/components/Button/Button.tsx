/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/core";
import { Theme } from "@theme/styled";
import { Link } from "gatsby-plugin-intl";
import { rem } from "polished";

import { GetRenderComponentProps } from "~/utils/types";

type Color = "primary" | "secondary";
type Variant = "dark" | "light";

type RenderComponent = React.ComponentType | typeof Link | "a";

type Props<E extends RenderComponent> = {
  as?: E;
  name?: string;
  color?: Color;
  variant?: Variant;
  disabled?: boolean;
  /* Strips button styles for a button that looks like a regular anchor tag */
  stripButtonStyles?: boolean;
} & React.ComponentProps<"button"> &
  GetRenderComponentProps<E>;

const createStyles = (
  theme: Theme,
  color: Color = "primary",
  variant: Variant = "light"
) => {
  return css`
    /* Defaults (size - medium, color - primary, variant - default) */
    font-size: ${rem("18px")};
    line-height: ${rem("28px")};
    height: 48px;
    min-width: 153px;
    --border-size: 2px;
    font-weight: 600;
    border: 2px solid ${theme.color.primary.light};
    border-radius: ${theme.shape.borderRadius.button}px;
    background-color: transparent;

    cursor: pointer;
    &:disabled {
      cursor: unset;
      opacity: 0.3;
    }

    ${color === "primary" && variant === "light"
      ? css`
          color: ${theme.color.text.light};
        `
      : css`
          color: ${theme.color.secondary.darker};
          border-color: ${theme.color.secondary.darker};
        `}

    ${color === "secondary" &&
      css`
        background-color: ${theme.color.primary.light};
        color: ${theme.color.secondary.darker};
        border-color: ${theme.color.primary.light};
      `}

    &:not(:disabled):hover,
    &:not(:disabled):focus {
      ${color === "primary" && variant === "light"
        ? css`
            background-color: ${theme.color.primary.light};
            color: ${theme.color.secondary.darker};
          `
        : css`
            background-color: ${theme.color.secondary.darker};
            color: ${theme.color.text.light};
          `}

      ${color === "secondary" &&
        css`
          background-color: ${theme.color.secondary.accent};
          color: ${theme.color.secondary.darker};
          border-color: ${theme.color.secondary.accent};
        `}
    }
  `;
};

// For buttons that should look like links
const stripStyles = css`
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
`;

const StyledButton = styled.button``;

const Button = <T extends RenderComponent>({
  as,
  color = "primary",
  variant = "light",
  stripButtonStyles = false,
  children,
  ...props
}: Props<T>): ReturnType<React.FC<Props<T>>> => {
  const buttonProps = {
    css: (theme: Theme) =>
      !stripButtonStyles ? createStyles(theme, color, variant) : stripStyles,
    ...props,
  };

  return (
    <StyledButton as={as} {...buttonProps}>
      {children}
    </StyledButton>
  );
};

export default Button;
