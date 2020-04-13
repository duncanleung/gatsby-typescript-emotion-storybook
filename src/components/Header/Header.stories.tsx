import React from "react";
import Header from ".";
import Hero from "../Hero";
import { mobileViewPort } from "../../utils/stories";

export default {
  title: "Header",
  decorators: [(story: () => React.ComponentType) => <Hero>{story()}</Hero>],
};

export const MobileView = () => <Header />;

MobileView.story = mobileViewPort;

export const MobileNavOpenView = () => <Header isNavOpen />;
MobileNavOpenView.story = mobileViewPort;

export const TabletView = () => <Header />;
TabletView.story = {
  parameters: {
    viewport: { defaultViewport: "ipad" },
  },
};

export const DesktopView = () => <Header />;
