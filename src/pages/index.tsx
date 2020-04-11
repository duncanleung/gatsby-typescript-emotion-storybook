import React from "react";
import { injectIntl, InjectedIntlProps } from "gatsby-plugin-intl";

import { Layout } from "~/components/Layout";
import { SEO } from "~/components/SEO";
import Header from "~/components/Header";

const Index: React.FC<InjectedIntlProps> = ({ intl }) => {
  return (
    <Layout>
      <SEO title="Hello" />
      <Header />
    </Layout>
  );
};

export default injectIntl(Index);
