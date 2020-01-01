/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { css } from '@emotion/core';

import GlobalStyles from './GlobalStyles';

type Props = {};

const DefaultLayout: React.FC<Props> = ({
  children,

  ...props
}) => {
  return (
    <>
      <GlobalStyles />
      <div
        css={css`
          overflow: hidden;
        `}
        {...props}
      >
        {children}
      </div>
    </>
  );
};

export default DefaultLayout;
