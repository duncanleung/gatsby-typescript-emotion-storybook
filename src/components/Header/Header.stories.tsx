import React from "react";
import Header from ".";
import {
  mobileViewPort,
  tabletViewPort,
  desktopViewPort,
} from "../../utils/stories";

export default {
  title: "Header",
};

export const MobileView = () => <Header />;

MobileView.story = mobileViewPort;

export const MobileNavOpenView = () => <Header isNavOpen />;
MobileNavOpenView.story = mobileViewPort;

export const TabletView = () => <Header />;
TabletView.story = tabletViewPort;

export const DesktopView = () => <Header />;
DesktopView.story = desktopViewPort;
