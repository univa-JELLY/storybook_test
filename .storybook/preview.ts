import type { Preview } from "@storybook/react";
import previewDecorators from "./preview-decorators";
import DocsTemplate from "../src/stories/assets/DocsTemplate.mdx";

const preview: Preview = {
  decorators: previewDecorators,

  globalTypes: {
    mode: {
      description: "Mode for preview area",
      defaultValue: "light",
      toolbar: {
        title: "Mode",
        icon: "starhollow",
        items: [
          { value: "light", icon: "starhollow", title: "light" },
          { value: "dark", icon: "star", title: "dark" },
        ],
        dynamicTitle: true,
      },
    },
  },

  parameters: {
    docs: {
      page: DocsTemplate,
    },
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
