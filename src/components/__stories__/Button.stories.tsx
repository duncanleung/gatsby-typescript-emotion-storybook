import React from "react";
import { PrimaryButton, PrimaryButtonDark } from "../Button";
import RootProvider from "../../providers";

export default {
  title: "Button",
  decorators: [(story) => <RootProvider>{story()}</RootProvider>],
};

export const PrimaryButtonStyle = () => (
  <PrimaryButton>contact us</PrimaryButton>
);
