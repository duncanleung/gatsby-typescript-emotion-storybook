import React from "react";
import { useTheme } from "emotion-theming";
import { css } from "@emotion/core";

import Theme from "../../styles/theme";

interface buttonProps extends React.ButtonHTMLAttributes<any> {
  backgroundColor: string;
  hoverBackgroundColor: string;
  color: string;
  hoverColor: string;
}

const Button: React.FC<buttonProps> = ({
  children,
  backgroundColor,
  hoverBackgroundColor,
  color,
  hoverColor,
  ...props
}) => {
  return (
    <button
      css={css`
        height: 48px;
        padding: 9px 32px 11px;
        border: 2px solid ${color};
        border-radius: 24px;
        cursor: pointer;
        background: ${backgroundColor};
        color: ${color};

        &:not(:disabled):hover,
        &:not(:disabled):focus {
          background: ${hoverBackgroundColor};
          color: ${hoverColor};
        }

        &:disabled {
          opacity: 0.2;
          cursor: text;
        }
      `}
      {...props}
    >
      {children}
    </button>
  );
};

export const PrimaryButton: React.FC = ({ children }) => {
  let theme = useTheme<typeof Theme>();

  return (
    <Button
      backgroundColor={theme.colors.sacramentoGreen}
      color={theme.colors.white}
      hoverBackgroundColor={theme.colors.white}
      hoverColor={theme.colors.darkGreen}
    >
      {children}
    </Button>
  );
};
