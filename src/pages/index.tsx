import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import {
  injectIntl,
  FormattedMessage,
  InjectedIntlProps,
} from 'gatsby-plugin-intl';

import { Layout } from '~/components/Layout';
import { SEO } from '~/components/SEO';

import { ReactComponent as GatsbyIcon } from '~/icons/gatsby.svg';
import { ReactComponent as TypeScriptIcon } from '~/icons/typescript.svg';
import { ReactComponent as StorybookIcon } from '~/icons/storybook.svg';
import { ReactComponent as GithubIcon } from '~/icons/github.svg';

const Card = styled.div`
    min-width: 570px;
    padding: 1.5rem;
    text-align: center;
    background-color: #f7fafc;
    border-radius: 0.5rem;
    box-shadow: 2px 4px 12px 3px rgba(249,249,249,0.25);
}`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  background-color: #201b21;
`;

const iconStyles = css`
  width: 75px;
`;

const Logo = styled.img`
  max-width: 75px;
  margin: 0;
`;

const Index: React.FC<InjectedIntlProps> = ({ intl }) => {
  return (
    <Layout>
      <SEO title={intl.formatMessage({ id: 'homepage.title' })} />
      <Container>
        <Card>
          <div
            css={css`
              display: flex;
              justify-content: space-around;
            `}
          >
            <GatsbyIcon css={iconStyles} />
            <TypeScriptIcon
              css={css`
                fill: #007acc;
                ${iconStyles}
              `}
            />
            <Logo src="/logos/emotion.png" />
            <StorybookIcon
              css={css`
                ${iconStyles}
              `}
            />
          </div>
          <div
            css={css`
              padding: 30px 20px 20px;
            `}
          >
            <FormattedMessage id="greeting" />
          </div>
          <a
            href="https://github.com/duncanleung/gatsby-typescript-emotion-storybook"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubIcon
              css={css`
                width: 35px;
                margin-right: auto;
                margin-left: auto;
                display: inline-block;
                fill: black;
                transition: fill 0.2s ease-in-out;

                &:hover {
                  fill: #5d71e4;
                }
              `}
            />
          </a>
        </Card>
      </Container>
    </Layout>
  );
};

export default injectIntl(Index);
