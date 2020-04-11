import React from "react";
import { injectIntl, InjectedIntlProps } from "gatsby-plugin-intl";

import { Layout } from "~/components/Layout";
import { SEO } from "~/components/SEO";

const Index: React.FC<InjectedIntlProps> = ({ intl }) => {
  return (
    <Layout>
      <SEO title="Hello" />
      <h1>Hello, World</h1>
    </Layout>
  );
};

export default injectIntl(Index);
