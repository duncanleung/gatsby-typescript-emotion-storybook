import React from "react";
import HeroContent from ".";
import {
  mobileViewPort,
  tabletViewPort,
  desktopViewPort,
} from "../../utils/stories";

export default {
  title: "HeroContent",
  decorators: [(story: () => React.ComponentType) => <div>{story()}</div>],
};

export const MobileView = () => <HeroContent />;
MobileView.story = mobileViewPort;

export const TabletView = () => <HeroContent />;
TabletView.story = tabletViewPort;

export const DesktopView = () => <HeroContent />;
DesktopView.story = desktopViewPort;
