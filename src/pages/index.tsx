import React from "react";
import { injectIntl, InjectedIntlProps } from "gatsby-plugin-intl";
import { css } from "@emotion/core";
import { Layout } from "~/components/Layout";
import { SEO } from "~/components/SEO";
import Header from "~/components/Header";
import Hero from "~/components/Hero";
import HeroContent from "~/components/HeroContent";
import Team from "~/components/Team";
import Testimonial from "../components/Testimonial";
import ContactUs from "../components/ContactUs";

const Index: React.FC<InjectedIntlProps> = () => {
  return (
    <Layout>
      <SEO title="Hello" />
      <div
        css={css`
          position: relative;
          overflow: hidden;
        `}
      >
        <Hero>
          <Header />
          <HeroContent />
        </Hero>
        <Team />
      </div>
      <Testimonial />
      <ContactUs />
    </Layout>
  );
};

export default injectIntl(Index);
