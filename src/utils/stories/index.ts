export const mobileViewPort = {
  parameters: {
    viewport: { defaultViewport: "iphone6" },
    percy: { widths: [375] },
  },
};

export const tabletViewPort = {
  parameters: {
    viewport: { defaultViewport: "ipad" },
    percy: { widths: [768] },
  },
};

export const desktopViewPort = {
  parameters: {
    viewport: { defaultViewport: "desktop" },
    percy: { widths: [1440] },
  },
};
