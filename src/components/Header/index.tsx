import React from "react";
import { ReactComponent as Logo } from "~/assets/images/logo.svg";
import { ReactComponent as Hamburger } from "~/assets/images/icon-hamburger.svg";
import { ReactComponent as CloseIcon } from "~/assets/images/icon-close.svg";
import { Button } from "../Button";
import { spacer, above } from "../../utils/styles";

const Navigation: React.FC<{
  isNavOpen?: boolean;
}> = ({ isNavOpen }) => {
  return (
    <div
      css={css`
        flex: 1;
        ${isNavOpen &&
          css`
            position: fixed;
            height: 100%;
            width: 100%;
            background: rgba(0, 0, 0, 0.6);
            top: 0;
            right: 0;
          `}
      `}
    >
      <div
        css={(theme: Theme) => css`
          display: ${!isNavOpen ? "none" : "block"};

          ${isNavOpen &&
            css`
              position: fixed;
              background: ${theme.color.secondary.light};
              height: 100%;
              width: 255px;
              right: 0;
              padding: 112px 48px 0;
            `}

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
                cursor: pointer;
                margin-right: 40px;
              }

              ${isNavOpen &&
                css`
                  flex-direction: column;
                  padding: 0;

                  li {
                    margin: 0;
                    margin-bottom: ${spacer(3)};

                    &:last-child {
                      margin-bottom: 36px;
                    }
                  }
                `}
              ${above(
                "lg",
                css`
                  padding: 0 0 0 80px;
                `
              )}
            `}
          >
            <li>home</li>
            <li>about</li>
          </ul>
        </nav>
        <Button>contact us</Button>
      </div>
      {!isNavOpen ? (
        <Hamburger
          css={css`
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
          `}
        />
      ) : (
        <CloseIcon
          css={css`
            width: 16px;
            z-index: 100;
            cursor: pointer;
            position: absolute;
            right: ${spacer(3)};
            top: ${spacer(7)};
          `}
        />
      )}
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
      <Navigation isNavOpen />
    </header>
  );
};

export default Header;
