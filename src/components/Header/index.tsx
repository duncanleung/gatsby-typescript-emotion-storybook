import React from "react";
import { ReactComponent as Logo } from "~/assets/images/logo.svg";
import { ReactComponent as Hamburger } from "~/assets/images/icon-hamburger.svg";
import { ReactComponent as CloseIcon } from "~/assets/images/icon-close.svg";
import { css } from "@emotion/core";
import { Theme } from "@theme/styled";
import { rem } from "polished";
import { Button } from "../Button";
import { spacer, above } from "../../utils/styles";

const Navigation = () => {
  return (
    <div
      css={css`
        flex: 1;
      `}
    >
      <div
        css={css`
          display: none;

          ${above(
            "md",
            css`
              display: flex;
              justify-content: space-between;
              align-items: center;
            `
          )}
        `}
      >
        <nav>
          <ul
            css={(theme: Theme) => css`
              display: flex;
              list-style: none;
              color: ${theme.color.text.light};
              line-height: 28px;
              font-size: ${rem("18px")};
              margin: 0;
              padding: 0 0 0 48px;

              li {
                margin-right: 40px;
              }
            `}
          >
            <li>home</li>
            <li>about</li>
          </ul>
        </nav>
        <Button>contact us</Button>
      </div>
      <Hamburger
        css={css`
          display: block;
          margin-left: auto;
          width: 20px;

          ${above(
            "md",
            css`
              display: none;
            `
          )}
        `}
      />
    </div>
  );
};

const Header = () => {
  return (
    <header
      css={css`
        display: flex;
        align-items: center;
      `}
    >
      <Logo
        css={css`
          height: 32px;
        `}
      />
      <Navigation />
    </header>
  );
};

export default Header;
