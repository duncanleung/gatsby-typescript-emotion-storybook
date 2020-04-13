import React from "react";
import Header from ".";
import Hero from "../Hero";

export default {
  title: "Header",
  decorators: [(story: () => React.ComponentType) => <Hero>{story()}</Hero>],
};

const mobileViewPort = {
  parameters: {
    viewport: { defaultViewport: "iphone6" },
  },
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
