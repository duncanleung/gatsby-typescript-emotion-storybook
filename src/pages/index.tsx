import React from "react";
import { injectIntl, InjectedIntlProps } from "gatsby-plugin-intl";

import { Layout } from "~/components/Layout";
import { SEO } from "~/components/SEO";
import Header from "~/components/Header";
import Hero from "../components/Hero";
import HeroContent from "../components/HeroContent";
import Team from "../components/Team";

const Index: React.FC<InjectedIntlProps> = ({ intl }) => {
  return (
    <Layout>
      <SEO title="Hello" />
      <Hero>
        <Header />
        <HeroContent />
      </Hero>
      <Team />
    </Layout>
  );
};

export default injectIntl(Index);
