import React from "react";
import { mobileViewPort, tabletViewPort } from "../../utils/stories";
import Team from ".";
import Hero from "../Hero";
import HeroContent from "../HeroContent";

export default {
  title: "Team",
  decorators: [
    (story: () => React.ComponentType) => (
      <div>
        <Hero>
          <HeroContent />
        </Hero>
        {story()}
      </div>
    ),
  ],
};

export const MobileView = () => <Team />;

MobileView.story = mobileViewPort;

export const TabletView = () => <Team />;
TabletView.story = tabletViewPort;

export const DesktopView = () => <Team />;
