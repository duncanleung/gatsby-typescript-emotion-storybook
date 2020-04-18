import React from "react";
import { css } from "@emotion/core";
import { Theme } from "../../styled";
import { above } from "../../utils/styles";
import { ReactComponent as IconCog } from "~/assets/images/icon-cog.svg";
import { ReactComponent as IconPerson } from "~/assets/images/icon-person.svg";
import { ReactComponent as IconChart } from "~/assets/images/icon-chart.svg";

const baseStyles = (theme: Theme) => css`
  > div {
    display: grid;
    justify-items: center;
    text-align: center;
    margin-bottom: 48px;

    &:last-child {
      margin-bottom: 0;
    }

    svg {
      display: block;
      width: 72px;
      margin-bottom: 16px;
    }

    h4 {
      font-size: 18px;
      line-height: 28px;
      color: ${theme.color.primary.accent};
      margin-bottom: 8px;
    }

    p {
      margin: 0;
      font-size: 14px;
      line-height: 25px;
      opacity: 0.8;
    }
  }
`;

const tabletStyles = css`
  ${above(
    "md",
    css`
      > div {
        grid-template-columns: 72px 1fr;
        grid-column-gap: 23px;
        text-align: left;
        justify-items: left;
        margin-bottom: 32px;

        h4 {
          margin-bottom: 16px;
        }

        p {
          font-size: 15px;
        }
      }
    `
  )}
`;

const Features = () => (
  <div css={(theme) => [baseStyles(theme), tabletStyles]}>
    <div>
      <IconPerson />
      <div>
        <h4>Experienced Individuals</h4>
        <p>
          Our network is made up of highly experienced professionals who are
          passionate about what they do.
        </p>
      </div>
    </div>
    <div>
      <IconCog />
      <div>
        <h4>Easy to Implement</h4>
        <p>
          Our processes have been refined over years of implementation meaning
          our teams always deliver.
        </p>
      </div>
    </div>
    <div>
      <IconChart />
      <div>
        <h4>Enhanced Productivity</h4>
        <p>
          Our customized platform with in-built analytics helps you manage your
          distributed teams.
        </p>
      </div>
    </div>
  </div>
);

export default Features;
