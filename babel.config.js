module.exports = {
  env: {
    production: {
      plugins: ["babel-plugin-jsx-remove-data-test-id"],
    },
    // Jest needs @emotion/babel-preset-css-prop
    // Gatsby enables css-prop with gatsby-plugin-emotion
    // Storybook enables css-prop in /.storybook/webpack.config.js
    test: {
      presets: ["@emotion/babel-preset-css-prop"],
    },
  },

  presets: ["babel-preset-gatsby"],
  plugins: [
    [
      "module-resolver",
      {
        root: ["./src"],
        alias: {
          "~": "./src",
          "@theme/styled": "./src/styled",
        },
      },
    ],
    ["@babel/plugin-proposal-decorators", { legacy: true }],
    ["@babel/plugin-proposal-class-properties", { loose: true }],
  ],
};
