import React from "react";
import { mobileViewPort, tabletViewPort } from "../../utils/stories";
import Testimonial from ".";

export default {
  title: "Testimonial",
  decorators: [(story: () => React.ComponentType) => <div>{story()}</div>],
};

export const MobileTestimonial = () => <Testimonial />;
MobileTestimonial.story = mobileViewPort;

export const TabletTestimonial = () => <Testimonial />;
TabletTestimonial.story = tabletViewPort;

export const DesktopTestimonial = () => <Testimonial />;
