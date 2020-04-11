import React, { useState } from "react";
import { css } from "@emotion/core";
import { Theme } from "@theme/styled";
import { rem } from "polished";
import { ReactComponent as Logo } from "~/assets/images/logo.svg";
import { ReactComponent as Hamburger } from "~/assets/images/icon-hamburger.svg";
import { Button } from "../Button";
import { spacer } from "../../utils/styles";
import { ReactComponent as CloseIcon } from "~/assets/images/icon-close.svg";

// #region styles
const getHeaderStyles = () => css`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

// #endregion

const StyledNav = ({
  isOpen,
  children,
}: React.PropsWithChildren<{
  isOpen: boolean;
}>) => (
  <nav
    css={(theme: Theme) => css`
      position: fixed;
      top: 0;
      left: 0;
      width: 0;
      height: 0;
      opacity: 0;
      z-index: 99;
      background-color: rgba(0, 0, 0, 0.5);

      ${isOpen &&
        css`
          transition: opacity 100ms ease-in;

          width: 100vw;
          height: 100vh;
          opacity: 1;
        `}

      ul {
        position: absolute;
        margin: 0;
        right: 0;
        transform: translateX(255px);
        transition: 100ms ease-in;
        background-color: ${theme.color.secondary.light};
        height: 0;
        z-index: 100;
        list-style: none;
        font-size: ${rem("18px")};
        line-height: ${rem("28px")};
        color: ${theme.color.text.light};

        ${isOpen &&
          css`
            width: 255px;
            height: 100%;
            padding: ${rem("112px")} ${rem("48px")} 0;

            transform: translateX(0);
          `}

        > li {
          margin-bottom: ${spacer(3)};

          &:last-child {
            margin-top: ${rem("36px")};
          }
        }
      }
    `}
  >
    {children}
  </nav>
);

const Navigation = () => {
  const [isOpen, setNavState] = useState(false);
  const openNav = () => setNavState(true);
  const closeNav = () => setNavState(false);

  return (
    <div>
      <Hamburger
        onClick={openNav}
        css={css`
          display: block;
          width: 20px;
          height: 17px;
          cursor: pointer;
        `}
      />
      <StyledNav isOpen={isOpen}>
        <span
          css={css`
            width: ${spacer(2)};
            height: ${spacer(2)};
            position: absolute;
            z-index: 101;
            right: ${spacer(3)};
            top: ${spacer(7)};
            cursor: pointer;
          `}
        >
          <CloseIcon onClick={closeNav} />
        </span>
        <ul>
          <li>home</li>
          <li>about</li>
          <li>
            <Button color="secondary">contact us</Button>
          </li>
        </ul>
      </StyledNav>
    </div>
  );
};

const Header = () => {
  return (
    <header css={getHeaderStyles()}>
      <Logo
        css={css`
          display: block;
          width: 128px;
          height: 32px;
        `}
      />

      <Navigation />
    </header>
  );
};

export default Header;
