import React from "react";
import { css } from "@emotion/core";
import { ReactComponent as Logo } from "~/assets/images/logo.svg";

// #region styles
const getHeaderStyles = () => css`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

// #endregion

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
      hi
    </header>
  );
};

export default Header;
