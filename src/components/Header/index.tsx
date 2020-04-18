import React from "react";
import { css } from "@emotion/core";
import { Theme } from "@theme/styled";
import { rem } from "polished";
import { ReactComponent as Logo } from "~/assets/images/logo.svg";

import { above, between } from "../../utils/styles";
import shared from "../../utils/styles/shared";
import Navigation from "./Navigation";

function headerStyles(theme: Theme) {
  return css`
    background-color: ${theme.color.primary.dark};
    padding-top: ${rem("48px")};
    padding-bottom: ${rem("48px")};

    > div {
      display: flex;
      align-items: center;
    }

    ${between(
      "md",
      "xxl",
      css`
        --side-padding: ${rem("40px")};
        padding-top: ${rem("64px")};
      `
    )}
  `;
}

const overrideContentStyles = css`
  ${above(
    "md",
    css`
      max-width: 100%;
    `
  )}

  ${above(
    "xxl",
    css`
      max-width: var(--content-width);
    `
  )}
`;

const logoStyles = css`
  height: 32px;

  ${above(
    "xxl",
    css`
      height: 40px;
    `
  )}
`;

const Header: React.FC<{
  isNavOpen?: boolean;
  onOpenNav?: () => void;
  onCloseNav?: () => void;
}> = ({ isNavOpen, onOpenNav, onCloseNav }) => {
  return (
    <header
      css={(theme: Theme) => [
        shared.componentContainerStyles,
        headerStyles(theme),
      ]}
    >
      <div css={[shared.componentContentStyles, overrideContentStyles]}>
        <Logo css={logoStyles} />
        <Navigation
          isNavOpen={isNavOpen}
          onOpenNav={onOpenNav}
          onCloseNav={onCloseNav}
        />
      </div>
    </header>
  );
};

export default Header;
