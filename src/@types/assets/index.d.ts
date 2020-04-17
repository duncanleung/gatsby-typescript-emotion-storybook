declare module "*.svg" {
  import React = require("react");
  export const ReactComponent: React.SFC<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}

declare module "*.jpg" {
  const jpgContent: string;
  export default jpgContent;
}

declare module "*.png" {
  const pngContent: string;
  export default pngContent;
}

declare module "*.json" {
  const jsonContent: string;
  export default jsonContent;
}

declare module "*.ttf" {}
