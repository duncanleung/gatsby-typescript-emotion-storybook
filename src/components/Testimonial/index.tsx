import React from "react";
import { css } from "@emotion/core";
import avatarKady from "~/assets/images/avatar-kady.jpg";
import avatarAiysha from "~/assets/images/avatar-aiysha.jpg";
import avatarArthur from "~/assets/images/avatar-arthur.jpg";
import { ReactComponent as IconQuotes } from "~/assets/images/icon-quotes.svg";
import { ReactComponent as BgPatternOne } from "~/assets/images/bg-pattern-home-4-about-3.svg";
import { ReactComponent as BgPatternTwo } from "~/assets/images/bg-pattern-home-5.svg";
import { Theme } from "~/styled";

const Testimonial = () => (
  <div
    css={(theme: Theme) => css`
      background: ${theme.color.secondary.dark};
      padding: 140px 24px 164px;
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

      > div > div {
        display: grid;
        grid-gap: 16px;

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
    `}
  >
    <BgPatternOne
      css={css`
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        height: 100px;
      `}
    />
    <BgPatternTwo
      css={css`
        display: block;
        position: absolute;
        right: 0;
        bottom: -50px;
        width: 200px;
        height: 200px;
      `}
    />
    <h2>
      Delivering real results for top companies. Some of our{" "}
      <span>success stories.</span>
    </h2>
    <div>
      <div>
        <hgroup>
          <h3>Kady Baker</h3>
          <h4>Product Manager at Bookmark</h4>
        </hgroup>
        <p>
          <IconQuotes />
          “The team perfectly fit the specialized skill set required. They
          focused on the most essential features helping us launch the platform
          eight months faster than planned.”
        </p>
        <img src={avatarKady} alt="Kady Baker" />
      </div>
      <div>
        <hgroup>
          <h3>Aiysha Reese</h3>
          <h4>Founder of Manage</h4>
        </hgroup>
        <p>
          <IconQuotes />
          “We needed to automate our entire onboarding process. The team came in
          and built out the whole journey. Since going live, user retention has
          gone through the roof!”
        </p>
        <img src={avatarAiysha} alt="Aiysha Reese" />
      </div>
      <div>
        <hgroup>
          <h3>Arthur Clarke</h3>
          <h4>Co-founder of MyPhysio</h4>
        </hgroup>
        <p>
          <IconQuotes />
          “Amazing. Our team helped us build an app that delivered a new
          experience for hiring a physio. The launch was an instant success with
          100k downloads in the first month.”
        </p>
        <img src={avatarArthur} alt="Arthur Clarke" />
      </div>
    </div>
  </div>
);

export default Testimonial;
