import initStoryshots from "@storybook/addon-storyshots";
import { imageSnapshot } from "@storybook/addon-storyshots-puppeteer";

initStoryshots({ suite: "Image storyshots", test: imageSnapshot() });
