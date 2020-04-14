import React from "react";
import { mobileViewPort, tabletViewPort } from "../../utils/stories";
import Team from ".";

export default {
  title: "Team",
  decorators: [(story: () => React.ComponentType) => <div>{story()}</div>],
};

export const MobileView = () => <Team />;

MobileView.story = mobileViewPort;
