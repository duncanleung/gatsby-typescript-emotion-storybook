import React from "react";
import HeroContent from ".";
import Hero from "../Hero";
import { mobileViewPort } from "../../utils/stories";

export default {
  title: "HeroContent",
  decorators: [(story: () => React.ComponentType) => <Hero>{story()}</Hero>],
};

export const MobileHeroContent = () => <HeroContent />;
MobileHeroContent.story = mobileViewPort;
