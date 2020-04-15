import React from "react";
import { mobileViewPort, tabletViewPort } from "../../utils/stories";
import Footer from ".";

export default {
  title: "Footer",
  decorators: [(story: () => React.ComponentType) => <div>{story()}</div>],
};

export const MobileFooter = () => <Footer />;
MobileFooter.story = mobileViewPort;

export const TabletFooter = () => <Footer />;
TabletFooter.story = tabletViewPort;

export const DesktopFooter = () => <Footer />;
