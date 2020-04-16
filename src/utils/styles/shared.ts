import { css } from "@emotion/core";
import { rem } from "polished";
import { above } from ".";

const componentContainerStyles = css`
  --side-padding: ${rem("24px")};
  padding-left: var(--side-padding);
  padding-right: var(--side-padding);

  ${above(
    "md",
    css`
      --side-padding: ${rem("97.5px")};
    `
  )}

  ${above(
    "xxl",
    css`
      --side-padding: ${rem("165px")};
    `
  )}
`;

const componentContentStyles = css`
  --content-width: ${rem("327px")};

  max-width: var(--content-width);
  margin-left: auto;
  margin-right: auto;

  ${above(
    "md",
    css`
      --content-width: ${rem("573px")};
    `
  )}

  ${above(
    "xxl",
    css`
      --content-width: ${rem("1110px")};
    `
  )}
`;

export default {
  componentContainerStyles,
  componentContentStyles,
};
