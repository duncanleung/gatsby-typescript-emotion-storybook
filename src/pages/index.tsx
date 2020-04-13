import React from "react";
import { injectIntl, InjectedIntlProps } from "gatsby-plugin-intl";

import { Layout } from "~/components/Layout";
import { SEO } from "~/components/SEO";
import Header from "~/components/Header";
import Hero from "../components/Hero";

const Index: React.FC<InjectedIntlProps> = ({ intl }) => {
  return (
    <Layout>
      <SEO title="Hello" />
      <Hero>
        <Header />
      </Hero>
    </Layout>
  );
};

export default injectIntl(Index);
