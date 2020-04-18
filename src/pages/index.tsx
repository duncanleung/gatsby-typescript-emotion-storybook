import React from "react";
import { injectIntl, InjectedIntlProps } from "gatsby-plugin-intl";
import { Layout } from "~/components/Layout";
import { SEO } from "~/components/SEO";
import { css } from "@emotion/core";
import { Theme } from "../styled";

const Index: React.FC<InjectedIntlProps> = () => {
  return (
    <Layout>
      <SEO title="Hello" />
      <div
        css={(theme: Theme) => css`
          padding: 150px;
          background: ${theme.color.secondary.accent};
        `}
      >
        <h1>Hello, World</h1>
      </div>
    </Layout>
  );
};

export default injectIntl(Index);
