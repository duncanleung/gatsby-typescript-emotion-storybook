import React from "react";
import { injectIntl, InjectedIntlProps } from "gatsby-plugin-intl";
import { Layout } from "~/components/Layout";
import { SEO } from "~/components/SEO";
import HeroContent from "~/components/HeroContent";
import Team from "~/components/Team";
import Testimonial from "../components/Testimonial";
import ContactUs from "../components/ContactUs";

const Index: React.FC<InjectedIntlProps> = () => {
  return (
    <Layout>
      <SEO title="Hello" />
      <HeroContent />
      <Team />
      <Testimonial />
      <ContactUs />
    </Layout>
  );
};

export default injectIntl(Index);
