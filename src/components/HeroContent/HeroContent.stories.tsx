import React from "react";
import HeroContent from ".";
import Hero from "../Hero";
import { mobileViewPort, tabletViewPort } from "../../utils/stories";

export default {
  title: "HeroContent",
  decorators: [(story: () => React.ComponentType) => <Hero>{story()}</Hero>],
};

export const MobileHeroContent = () => <HeroContent />;
MobileHeroContent.story = mobileViewPort;

export const TabletHeroContent = () => <HeroContent />;
TabletHeroContent.story = tabletViewPort;

export const DesktopHeroContent = () => <HeroContent />;
