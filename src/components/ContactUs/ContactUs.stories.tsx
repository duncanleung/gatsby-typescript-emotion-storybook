import React from "react";
import {
  mobileViewPort,
  tabletViewPort,
  desktopViewPort,
} from "../../utils/stories";
import ContactUs from ".";

export default {
  title: "ContactUs",
  decorators: [(story: () => React.ComponentType) => <div>{story()}</div>],
};

export const MobileView = () => <ContactUs />;
MobileView.story = mobileViewPort;

export const TabletView = () => <ContactUs />;
TabletView.story = tabletViewPort;

export const DesktopView = () => <ContactUs />;
DesktopView.story = desktopViewPort;
