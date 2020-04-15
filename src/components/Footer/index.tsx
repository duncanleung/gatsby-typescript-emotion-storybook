import React from "react";
import { css } from "@emotion/core";
import { ReactComponent as Logo } from "~/assets/images/logo.svg";
import { ReactComponent as TwitterIcon } from "~/assets/images/icon-twitter.svg";
import { ReactComponent as FBIcon } from "~/assets/images/icon-facebook.svg";
import { ReactComponent as PinterestIcon } from "~/assets/images/icon-pinterest.svg";
import { Theme } from "~/styled";
import { above } from "~/utils/styles";

const Footer = () => (
  <footer
    css={(theme: Theme) => css`
      padding: 66px 24px 64px;
      background: ${theme.color.secondary.darkest};
      text-align: center;

      ${above(
        "md",
        css`
          padding: 56px 40px;
        `
      )}

      ${above(
        "xxl",
        css`
          padding: 48px 165px;
        `
      )}
    `}
  >
    <div
      css={css`
        display: grid;
        grid-gap: 24px;
        justify-content: center;
        align-items: center;

        address,
        small {
          font-size: 15px;
          line-height: 25px;
          font-style: normal;
          opacity: 0.6;
          margin-bottom: 16px;
        }

        ul,
        li {
          margin: 0;
          padding: 0;
        }
        ul {
          list-style: none;
          display: flex;
          justify-content: center;

          li {
            font-size: 15px;
            line-height: 25px;
            &:not(:last-child) {
              margin-right: 24px;
            }
          }
        }

        ${above(
          "md",
          css`
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: 100px 25px;
            grid-row-gap: 34px;

            > div:first-child {
              justify-self: left;
            }
            > div:nth-child(2) {
              justify-self: right;
              text-align: right;
            }
          `
        )}

        ${above(
          "xxl",
          css`
            grid-template-columns: 160px 1fr 255px;
            grid-column-gap: 125px;
            grid-template-rows: 1fr;
            text-align: left;

            > div:nth-child(2) {
              justify-self: left;
              text-align: left;
            }
            ul {
              justify-content: left;
            }
            ul > li {
              font-size: 18px;
              line-height: 28px;
            }

            address {
              margin-bottom: 0;
            }
          `
        )}
      `}
    >
      <div>
        <Logo
          css={css`
            height: 24px;
            margin-bottom: 24px;
            ${above(
              "xxl",
              css`
                height: 40px;
              `
            )}
          `}
        />
        <div>
          <ul>
            <li>home</li>
            <li>about</li>
          </ul>
        </div>
      </div>
      <div>
        <address>
          987 Hillcrest Lane
          <br />
          Irvine, CA
          <br />
          California 92714
          <br />
          Call Us : 949-833-7432
        </address>
      </div>
      <div
        css={css`
          ${above(
            "md",
            css`
              display: flex;
              grid-column: 1 / -1;
              justify-content: space-between;

              div,
              small {
                margin: 0;
              }
            `
          )}

          ${above(
            "xxl",
            css`
              display: grid;
              grid-column: 3 / -1;
              height: 100%;
              align-content: space-between;
              justify-content: right;
              > div {
                justify-content: right;
              }
            `
          )}
        `}
      >
        <div
          css={css`
            display: grid;
            grid-template-columns: repeat(3, 24px);
            grid-column-gap: 16px;
            justify-content: center;
            margin-bottom: 16px;
            svg {
              display: block;
            }
          `}
        >
          <FBIcon />
          <PinterestIcon />
          <TwitterIcon />
        </div>
        <small>Copyright 2020. All Rights Reserved</small>
      </div>
    </div>
  </footer>
);

export default Footer;
