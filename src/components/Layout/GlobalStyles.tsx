import React from 'react';
import { Global, css } from '@emotion/core';
import { normalize, rem } from 'polished';

import { above, spacer } from '~/utils/styles';

const GlobalStyles: React.FC = () => {
  return (
    <Global
      styles={theme => css`
        ${normalize()}

        html,
          body {
          font-family: 'neue-haas-unica', serif;
          font-weight: 400;
          color: ${theme.color.text.body};
          line-height: 1.5;
          box-sizing: border-box;
        }

        *,
        *:before,
        *:after {
          box-sizing: inherit;
        }

        /* HTML selector defaults  */
        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          font-family: 'Lora', serif;
          font-weight: 600;
          line-height: 1.3;
          color: ${theme.color.text.heading};
          margin-top: 0;
          margin-bottom: ${theme.spacing.unit * 3}px;
        }

        a {
          color: ${theme.color.secondary};
          text-decoration: none;
        }

        p {
          margin-bottom: ${spacer(2.5)}px;

          ${above(
            'md',
            css`
              font-size: ${rem('18px')};
            `
          )};
        }

        img {
          max-width: 100%;
          margin-bottom: ${theme.spacing.unit * 3}px;
        }

        button {
          color: ${theme.color.secondary};
          font-weight: 500;
          background: none;
          border: 0;
        }
      `}
    />
  );
};

export default GlobalStyles;
