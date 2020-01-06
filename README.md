<p align="center" style="display: flex; justify-content: space-between; max-width:390px; margin-left: auto; margin-right: auto;">
  <a href="https://www.gatsbyjs.org">
    <img alt="Gatsby" src="https://www.gatsbyjs.org/monogram.svg" width="60" />
  </a>
  <a href="https://www.typescriptlang.org">
    <img alt="TypeScript" src="https://cloud.githubusercontent.com/assets/3449303/18765110/8c5c603e-8114-11e6-9166-554b0face27b.png" width="60" />
  </a>
  <a href="https://emotion.sh">
    <img alt="Emotion JS" src="https://camo.githubusercontent.com/209bdea972b9b6ef90220c59ecbe66d35ffefa8a/68747470733a2f2f63646e2e7261776769742e636f6d2f746b6834342f656d6f74696f6e2f6d61737465722f656d6f74696f6e2e706e67" width="60" />
  </a>
  <a href="https://storybook.js.org">
    <img alt="Storybook JS" src="https://raw.githubusercontent.com/react-theming/storybook-addon-material-ui/master/docs/logos/Storybook.png" width="50" />
  </a>
</p>

<h1 align="center">
  <div>
  Gatsby + TypeScript + Emotion + Storybook
  </div>
  <div style="font-style: italic; font-size: 20px">
  (and React Intl + SVGR + Jest)
  </div>
</h1>

[![Netlify Status](https://api.netlify.com/api/v1/badges/e97163d4-66e5-4abb-b6a9-27c4a278c7c2/deploy-status)](https://app.netlify.com/sites/gatsby-typescript-emotion-storybook/deploys) ![Dependabot](https://flat.badgen.net/dependabot/duncanleung/gatsby-typescript-emotion-storybook?icon=dependabot)

## ✨ About

This repo is a starter to get a **Gatsby** + **TypeScript** + **Emotion** project (with React Intl + SVGR + Jest) working with **Storybook**.

You can use this starter as a launch point or reference the `gatsby-config.js` and `/.storybook/webpack.config.js` config to see how to get the libraries working with Storybook.

### Integrated Libraries

- [React.js](https://reactjs.org/)
- [Gatsby.js](https://www.gatsbyjs.org/)
- [Typescript](https://www.typescriptlang.org/)
- [Emotion.js](https://emotion.sh/)
- [gatsby-plugin-intl](https://github.com/wiziple/gatsby-plugin-intl/)
- [gatsby-plugin-svgr](https://github.com/zabute/gatsby-plugin-svgr/)
- [Jest](https://jestjs.io/)

## 🚀 Quickstart

There are few dependencies to install on your local machine to begin.

1. **Install Node**

   Install node. Using [Node Version Manager](https://github.com/nvm-sh/nvm) and Node.js [version >= 8.2.1](https://nodejs.org/en/download/releases/) is recommended (so that [npx](https://www.npmjs.com/package/npx) comes bundled).

   After Node is set up locally, check out the repo to your local machine and install the rest of the project dependencies by running:

2. **Create a Gatsby Site**

   Use the Gatsby CLI to create a new site, specifying this starter.

   ```sh
   # create a new Gatsby site using the blog starter
   npx gatsby new gatsby-typescript-emotion-storybook https://github.com/duncanleung/gatsby-typescript-emotion-storybook
   ```

3. **Local Development**

   Navigate into your new site’s directory and start the dev server and start developing locally, run:

   ```sh
   cd gatsby-typescript-emotion-storybook

   yarn dev
   ```

   Your site is now running at `http://localhost:8000`!

   Note: You'll also see a second link: `http://localhost:8000/___graphql`. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql).

   Open the gatsby-typescript-emotion-storybook directory in your code editor of choice and edit `src/pages/index.tsx`. Save your changes and the browser will update in real-time!

   **Environment Variables**

   Environment variables can be used to control various features or configurations. These environment variables are accessed at build time.

   Locally, [dotenv](https://www.npmjs.com/package/dotenv) allows storing env vars in a `.env` file.

   If you are just starting, rename the `.env.sample` to `.env` to get the base variables to run the project locally.

   Read the docs on how [Gatsby handles env vars](https://www.gatsbyjs.org/docs/environment-variables/).

   ### Typescript

   Types for this project are declared in `/src/@types`.

   The config is located in the `tsconfig.json` file in the root.

4. **Open the source code and start editing!**

   Your site is now running at `http://localhost:8000`!

   _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql)._

   Open the `gatsby-starter-typescript-storybook` directory in your code editor of choice and edit `src/pages/index.tsx`. Save your changes and the browser will update in real-time!

5. **Run Storybook**

   [Storybook](https://storybook.js.org) allows for Component Driven Development. Start up the storybook runtime by running this script:

   Start running Storybook's local development environment.

   ```bash
   yarn storybook
   ```

5)  **Run Tests**

    Jest and React Testing Libary provide test running and rendering.

    Start running Jest

    ```bash
    yarn test // runs jest CLI
    yarn test:watch // runs jest with --watch flag
    ```

    The Jest config will look for test files with the naming convention `*.test.ts` or `*.test.tsx`.

    The convention in this project is to co-locate tests in a sub-directory called `__tests__`, in the same directory that the component or functions live.

    Global mocks are located in the `__mocks__` directory in the root of the project, while local mocks are co-located where they are used.
    Mock test data should be added under sub-directory `data` within the `__tests__` directory, ex: `__tests__/data/component-test-data.ts`

    > Jest automatically creates a `__snapshots__` directory if you happen to be using snapshot testing.

    To find out more about testing, look at the following resources:

    - [Jest docs](https://jestjs.io/)
    - [React Testing Library](https://github.com/testing-library/react-testing-library)

## 🧐 What's inside?

A quick look at the top-level files and directories you'll see in a Gatsby project.

    .
    ├── node_modules
    ├── src
    ├── .gitignore
    ├── .prettierrc
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── gatsby-ssr.js
    ├── LICENSE
    ├── package-lock.json
    ├── package.json
    └── README.md

1.  **`/node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.

2.  **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for “source code”.

3.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

4.  **`.prettierrc`**: This is a configuration file for [Prettier](https://prettier.io/). Prettier is a tool to help keep the formatting of your code consistent.

5.  **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.org/docs/browser-apis/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.

6.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.org/docs/gatsby-config/) for more detail).

7.  **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.org/docs/node-apis/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

8.  **`gatsby-ssr.js`**: This file is where Gatsby expects to find any usage of the [Gatsby server-side rendering APIs](https://www.gatsbyjs.org/docs/ssr-apis/) (if any). These allow customization of default Gatsby settings affecting server-side rendering.

9.  **`LICENSE`**: Gatsby is licensed under the MIT license.

10. **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**

11. **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

12. **`README.md`**: A text file containing useful reference information about your project.

## 🎓 Learning Gatsby

Looking for more guidance? Full documentation for Gatsby lives [on the website](https://www.gatsbyjs.org/). Here are some places to start:

- **For most developers, we recommend starting with our [in-depth tutorial for creating a site with Gatsby](https://www.gatsbyjs.org/tutorial/).** It starts with zero assumptions about your level of ability and walks through every step of the process.

- **To dive straight into code samples, head [to our documentation](https://www.gatsbyjs.org/docs/).** In particular, check out the _Guides_, _API Reference_, and _Advanced Tutorials_ sections in the sidebar.

## 💫 Deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/duncanleung/gatsby-typescript-emotion-storybook)
