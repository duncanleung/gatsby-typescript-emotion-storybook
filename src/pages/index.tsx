import React from "react";
import { injectIntl, InjectedIntlProps } from "gatsby-plugin-intl";

import { Layout } from "~/components/Layout";
import { SEO } from "~/components/SEO";

const Index: React.FC<InjectedIntlProps> = ({ intl }) => {
  return (
    <Layout>
      <SEO title={intl.formatMessage({ id: "homepage.title" })} />
      <h1>Hello, World</h1>
    </Layout>
  );
};

export default injectIntl(Index);
