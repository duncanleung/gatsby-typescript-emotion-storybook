import React from "react";
import { FormattedMessage } from "gatsby-plugin-intl";
import { css } from "@emotion/core";

import { Theme } from "@theme/styled";
import Button from "./Button";
import theme from "~/theme";

export default {
  title: "Button",
};

const ButtonWithText: typeof Button = (props) => (
  <Button {...props}>
    <FormattedMessage id="contact_us" />
  </Button>
);

const containerStyles = (background: "dark" | "light" = "dark") => css`
  padding: 24px;
  background: ${background === "dark"
    ? theme.color.secondary.darker
    : theme.color.primary.light};
  > * {
    margin: 10px;
  }
`;

export const PrimaryButtonStates = () => (
  <div css={containerStyles("dark")}>
    <ButtonWithText />
    <ButtonWithText disabled />
  </div>
);

export const PrimaryDarkButtonStates = () => (
  <div css={containerStyles("light")}>
    <ButtonWithText variant="dark" />
    <ButtonWithText variant="dark" disabled />
  </div>
);

export const SecondaryButtonStates = () => (
  <div css={containerStyles("dark")}>
    <ButtonWithText color="secondary" />
    <ButtonWithText disabled color="secondary" />
  </div>
);
