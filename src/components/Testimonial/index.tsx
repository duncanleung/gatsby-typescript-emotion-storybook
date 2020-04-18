import React from "react";
import { css } from "@emotion/core";
import avatarKady from "~/assets/images/avatar-kady.jpg";
import avatarAiysha from "~/assets/images/avatar-aiysha.jpg";
import avatarArthur from "~/assets/images/avatar-arthur.jpg";
import { ReactComponent as IconQuotes } from "~/assets/images/icon-quotes.svg";
import { ReactComponent as BgPatternOne } from "~/assets/images/bg-pattern-home-4-about-3.svg";
import { ReactComponent as BgPatternTwo } from "~/assets/images/bg-pattern-home-5.svg";
import { Theme } from "~/styled";
import { above } from "../../utils/styles";
import shared from "../../utils/styles/shared";

const baseStyles = (theme: Theme) => css`
  background: ${theme.color.secondary.dark};
  padding-top: 140px;
  padding-bottom: 164px;
  text-align: center;
  position: relative;
  overflow: hidden;
  h2 {
    font-size: 32px;
    line-height: 32px;
    margin-bottom: 84px;
  }

  span {
    color: ${theme.color.secondary.accent};
  }

  div > section {
    display: grid;
    grid-gap: 16px;
    position: relative;

    &:not(:last-child) {
      margin-bottom: 84px;
    }

    > p {
      font-size: 14px;
      line-height: 25px;
      order: -1;
      z-index: 1;
      margin: 0;

      svg {
        display: block;
        position: absolute;
        height: 56px;
        left: 50%;
        transform: translate(-50%, -35px);
        z-index: -1;
      }
    }

    h3 {
      font-size: 18px;
      line-height: 28px;
      color: ${theme.color.secondary.accent};
      margin-bottom: 2px;
    }

    h4 {
      font-size: 13px;
      line-height: 18px;
      font-weight: 500;
      font-style: italic;
      font-family: "Livvic Medium Italic";
    }

    img {
      width: 62px;
      height: 62px;
      border-radius: 50%;
      display: block;
      margin: auto;
      border: 2px solid #c4fffe;
    }
  }
`;

const tabletStyles = css`
  ${above(
    "md",
    css`
      padding-top: 100px;
      padding-bottom: 100px;

      h2 {
        margin-left: auto;
        margin-right: auto;
      }

      div > section > p {
        font-size: 15px;
        line-height: 26px;
        margin-left: auto;
        margin-right: auto;
      }
    `
  )}
`;

const desktopStyles = css`
  ${above(
    "xxl",
    css`
      padding-top: 140px;
      padding-bottom: 140px;

      h2 {
        font-size: 48px;
        line-height: 48px;
        width: 932px;
        margin-bottom: 92px;
      }

      div > div {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-column-gap: 30px;
        margin-left: auto;
        margin-right: auto;

        > section {
          grid-row-gap: 24px;
          margin: 0;
          &:not(:last-child) {
            margin: 0;
          }
          img {
            margin-top: 8px;
          }
        }
      }
    `
  )}
`;

const brStyles = css`
  display: none;
  ${above(
    "md",
    css`
      display: initial;
    `
  )}

  ${above(
    "xl",
    css`
      display: none;
    `
  )}
`;

const bgPatternOneStyles = css`
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  height: 100px;
`;

const bgPatternTwoStyles = css`
  display: block;
  position: absolute;
  right: 0;
  bottom: -50px;
  width: 200px;
  height: 200px;
`;

const Testimonial = () => (
  <div
    css={(theme) => [
      shared.componentContainerStyles,
      baseStyles(theme),
      tabletStyles,
      desktopStyles,
    ]}
  >
    <BgPatternOne css={bgPatternOneStyles} />
    <BgPatternTwo css={bgPatternTwoStyles} />
    <div css={shared.componentContentStyles}>
      <h2>
        Delivering real results for top companies. Some of our{" "}
        <br css={brStyles} />
        <span>success stories.</span>
      </h2>
      <div>
        <section>
          <hgroup>
            <h3>Kady Baker</h3>
            <h4>Product Manager at Bookmark</h4>
          </hgroup>
          <p>
            <IconQuotes />
            “The team perfectly fit the specialized skill set required. They
            focused on the most essential features helping us launch the
            platform eight months faster than planned.”
          </p>
          <img src={avatarKady} alt="Kady Baker" />
        </section>
        <section>
          <hgroup>
            <h3>Aiysha Reese</h3>
            <h4>Founder of Manage</h4>
          </hgroup>
          <p>
            <IconQuotes />
            “We needed to automate our entire onboarding process. The team came
            in and built out the whole journey. Since going live, user retention
            has gone through the roof!”
          </p>
          <img src={avatarAiysha} alt="Aiysha Reese" />
        </section>
        <section>
          <hgroup>
            <h3>Arthur Clarke</h3>
            <h4>Co-founder of MyPhysio</h4>
          </hgroup>
          <p>
            <IconQuotes />
            “Amazing. Our team helped us build an app that delivered a new
            experience for hiring a physio. The launch was an instant success
            with 100k downloads in the first month.”
          </p>
          <img src={avatarArthur} alt="Arthur Clarke" />
        </section>
      </div>
    </div>
  </div>
);

export default Testimonial;
