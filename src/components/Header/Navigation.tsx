import React from "react";
import { css } from "@emotion/core";
import { rem } from "polished";
import { ReactComponent as Hamburger } from "~/assets/images/icon-hamburger.svg";
import { ReactComponent as CloseIcon } from "~/assets/images/icon-close.svg";
import { ReactComponent as BgPattern } from "~/assets/images/bg-pattern-about-1-mobile-nav-1.svg";
import { Button } from "../Button";
import { spacer, above } from "../../utils/styles";
import { Theme } from "../../styled";

const baseStyles = (theme: Theme) => css`
  flex: 1;
  z-index: 99;

  > div {
    display: none;

    ul {
      display: flex;
      list-style: none;
      color: ${theme.color.text.light};
      line-height: 28px;
      font-size: ${rem("18px")};
      margin: 0;
      padding: 0 0 0 48px;

      li {
        cursor: pointer;
        margin-right: 40px;
      }
    }
  }
`;

const navOpenStyles = (theme: Theme) => css`
  position: fixed;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.6);
  top: 0;
  right: 0;

  > div {
    display: block;
    position: fixed;
    background: ${theme.color.secondary.light};
    height: 100%;
    width: 255px;
    right: 0;
    padding: 112px 48px 0;

    ul {
      flex-direction: column;
      padding: 0;

      li {
        margin: 0;
        margin-bottom: ${spacer(3)};

        &:last-child {
          margin-bottom: 36px;
        }
      }
    }
  }
`;

const tabletStyles = css`
  ${above(
    "md",
    css`
      > div {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
    `
  )}
`;

const desktopStyles = css`
  > div {
    ul {
      ${above(
        "lg",
        css`
          padding: 0 0 0 80px;
        `
      )}
    }
  }
`;

const navBgPatternStyles = css`
  display: block;
  position: absolute;
  width: 200px;
  bottom: 0;
  right: -100px;
`;

const hamburgerStyles = css`
  display: block;
  margin-left: auto;
  width: 20px;
  cursor: pointer;

  ${above(
    "md",
    css`
      display: none;
    `
  )}
`;

const closeIconStyles = css`
  width: 16px;
  z-index: 100;
  cursor: pointer;
  position: absolute;
  right: ${spacer(3)};
  top: ${spacer(7)};
`;

const Navigation: React.FC<{
  isNavOpen?: boolean;
  onOpenNav?: () => void;
  onCloseNav?: () => void;
}> = ({ isNavOpen = false, onOpenNav = () => {}, onCloseNav = () => {} }) => {
  return (
    <div
      css={(theme) => [
        baseStyles(theme),
        isNavOpen && navOpenStyles(theme),
        tabletStyles,
        desktopStyles,
      ]}
    >
      <div>
        <nav>
          <ul>
            <li>home</li>
            <li>about</li>
          </ul>
        </nav>
        {isNavOpen && <BgPattern css={navBgPatternStyles} />}
      </div>
      {!isNavOpen ? (
        <Hamburger
          css={hamburgerStyles}
          onClick={onOpenNav}
          onTouchEnd={onOpenNav}
        />
      ) : (
        <CloseIcon
          css={closeIconStyles}
          onClick={onCloseNav}
          onTouchEnd={onCloseNav}
        />
      )}
    </div>
  );
};

export default Navigation;
