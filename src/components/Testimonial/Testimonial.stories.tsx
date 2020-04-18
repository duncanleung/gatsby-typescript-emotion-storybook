import React from "react";
import {
  mobileViewPort,
  tabletViewPort,
  desktopViewPort,
} from "../../utils/stories";
import Testimonial from ".";

export default {
  title: "Testimonial",
  decorators: [(story: () => React.ComponentType) => <div>{story()}</div>],
};

export const MobileView = () => <Testimonial />;
MobileView.story = mobileViewPort;

export const TabletView = () => <Testimonial />;
TabletView.story = tabletViewPort;

export const DesktopView = () => <Testimonial />;
DesktopView.story = desktopViewPort;
