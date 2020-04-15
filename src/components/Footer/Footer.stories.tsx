import React from "react";
import {
  mobileViewPort,
  tabletViewPort,
  desktopViewPort,
} from "../../utils/stories";
import Footer from ".";

export default {
  title: "Footer",
  decorators: [(story: () => React.ComponentType) => <div>{story()}</div>],
};

export const MobileView = () => <Footer />;
MobileView.story = mobileViewPort;

export const TabletView = () => <Footer />;
TabletView.story = tabletViewPort;

export const DesktopView = () => <Footer />;
DesktopView.story = desktopViewPort;
