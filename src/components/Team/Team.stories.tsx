import React from "react";
import {
  mobileViewPort,
  tabletViewPort,
  desktopViewPort,
} from "../../utils/stories";
import Team from ".";

export default {
  title: "Team",
  decorators: [(story: () => React.ComponentType) => <div>{story()}</div>],
};

export const MobileView = () => <Team />;

MobileView.story = mobileViewPort;

export const TabletView = () => <Team />;
TabletView.story = tabletViewPort;

export const DesktopView = () => <Team />;
DesktopView.story = desktopViewPort;
