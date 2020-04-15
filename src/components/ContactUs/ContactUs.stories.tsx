import React from "react";
import { mobileViewPort, tabletViewPort } from "../../utils/stories";
import ContactUs from ".";

export default {
  title: "ContactUs",
  decorators: [(story: () => React.ComponentType) => <div>{story()}</div>],
};

export const MobileContactUs = () => <ContactUs />;
MobileContactUs.story = mobileViewPort;

export const TabletContactUs = () => <ContactUs />;
TabletContactUs.story = tabletViewPort;

export const DesktopContactUs = () => <ContactUs />;
