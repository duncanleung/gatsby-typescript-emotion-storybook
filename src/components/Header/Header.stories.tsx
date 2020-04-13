import React from "react";
import styled from "@theme/styled";
import Header from ".";
import theme from "../../theme";
import { above } from "../../utils/styles";
import { css } from "@emotion/core";

const Wrapper = styled.div`
  min-height: 100vh;
  background-color: ${theme.color.primary.dark};
  padding: 48px 24px 0;

  ${above(
    "md",
    css`
      padding: 64px 40px 0;
    `
  )}

  ${above(
    "lg",
    css`
      padding: 73px 165px 0;
    `
  )}
`;

export default {
  title: "Header",
  decorators: [
    (story: () => React.ComponentType) => <Wrapper>{story()}</Wrapper>,
  ],
};

export const MobileHeaderView = () => <Header />;

MobileHeaderView.story = {
  parameters: {
    viewport: { defaultViewport: "iphone6" },
  },
};

export const TabletHeaderView = () => <Header />;
TabletHeaderView.story = {
  parameters: {
    viewport: { defaultViewport: "ipad" },
  },
};

export const DesktopView = () => <Header />;
