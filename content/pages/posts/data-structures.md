---
title: Create React App
date: '2018-01-09'
thumb_img_path: /images/childhood.jpg
thumb_img_alt: Icelandic horses
hide_header: true
seo:
    title: Fragments of Iceland
    description: Iceland is a Nordic country between the North Atlantic and the Arctic Ocean.
    extra:
        - name: 'og:type'
          value: article
          keyName: property
        - name: 'og:title'
          value: Fragments of Iceland
          keyName: property
        - name: 'og:description'
          value: >-
              Iceland is a Nordic country between the North Atlantic and the Arctic
              Ocean.
          keyName: property
        - name: 'og:image'
          value: images/7.jpg
          keyName: property
          relativeUrl: true
        - name: 'twitter:card'
          value: summary_large_image
        - name: 'twitter:title'
          value: Fragments of Iceland
        - name: 'twitter:description'
          value: >-
              Iceland is a Nordic country between the North Atlantic and the Arctic
              Ocean.
        - name: 'twitter:image'
          value: images/7.jpg
          relativeUrl: true
layout: post
---

# Getting Started with Create React App&#xA;&#xA;

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### npm start

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000/) to view it in your browser.

The page will reload when you make changes.
You may also see any lint errors in the console.

### npm test

Launches the test runner in the interactive watch mode.
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### npm run build

Builds the app for production to the build folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### npm run eject

**Note: this is a one-way operation. Once you eject, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can eject at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except eject will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use eject. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: <https://facebook.github.io/create-react-app/docs/code-splitting>

### Analyzing the Bundle Size

This section has moved here: <https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size>

### Making a Progressive Web App

This section has moved here: <https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app>

### Advanced Configuration

This section has moved here: <https://facebook.github.io/create-react-app/docs/advanced-configuration>

### Deployment

This section has moved here: <https://facebook.github.io/create-react-app/docs/deployment>

### npm run build fails to minify

This section has moved here: <https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify>

# Getting Startednpx create-react-app my-appcd my-appnpm startnpx create-react-app my-appnpm init react-app my-appyarn create react-app my-appnpx create-react-app my-app --template \[template-name]npx create-react-app my-app --template typescriptnpx create-react-app my-app --use-npmmy-app├── README.md├── node_modules├── package.json├── .gitignore├── public│ ├── favicon.ico│ ├── index.html│ ├── logo192.png│ ├── logo512.png│ ├── manifest.json│ └── robots.txt└── src ├── App.css ├── App.js ├── App.test.js ├── index.css ├── index.js ├── logo.svg ├── serviceWorker.js └── setupTests.jscd my-app&#xA;&#xA;

Create React App is an officially supported way to create single-page React applications. It offers a modern build setup with no configuration.

## Quick Start[#](https://create-react-app.dev/docs/getting-started#quick-start)

> If you've previously installed create-react-app globally via npm install -g create-react-app, we recommend you uninstall the package using npm uninstall -g create-react-app or yarn global remove create-react-app to ensure that npx always uses the latest version.

_(_[_npx_](https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b)_ comes with npm 5.2+ and higher, see _[_instructions for older npm versions_](https://gist.github.com/gaearon/4064d3c23a77c74a3614c498a8bb1c5f)_)_

Then open <http://localhost:3000/> to see your app.

When you’re ready to deploy to production, create a minified bundle with npm run build.

![](https://cdn.jsdelivr.net/gh/facebook/create-react-app@27b42ac7efa018f2541153ab30d63180f5fa39e0/screencast.svg)

### Get Started Immediately[#](https://create-react-app.dev/docs/getting-started#get-started-immediately)

You **don’t** need to install or configure tools like webpack or Babel. They are preconfigured and hidden so that you can focus on the code.

Create a project, and you’re good to go.

## Creating an App[#](https://create-react-app.dev/docs/getting-started#creating-an-app)

**You’ll need to have Node >= 10 on your local development machine** (but it’s not required on the server). You can use [nvm](https://github.com/creationix/nvm#installation) (macOS/Linux) or [nvm-windows](https://github.com/coreybutler/nvm-windows#node-version-manager-nvm-for-windows) to switch Node versions between different projects.

To create a new app, you may choose one of the following methods:

### npx[#](https://create-react-app.dev/docs/getting-started#npx)

_(_[_npx_](https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b)_ comes with npm 5.2+ and higher, see _[_instructions for older npm versions_](https://gist.github.com/gaearon/4064d3c23a77c74a3614c498a8bb1c5f)_)_

### npm[#](https://create-react-app.dev/docs/getting-started#npm)

_npm init \<initializer> is available in npm 6+_

### Yarn[#](https://create-react-app.dev/docs/getting-started#yarn)

_yarn create is available in Yarn 0.25+_

### Selecting a template[#](https://create-react-app.dev/docs/getting-started#selecting-a-template)

You can now optionally start a new app from a template by appending --template \[template-name] to the creation command.

If you don't select a template, we'll create your project with our base template.

Templates are always named in the format cra-template-\[template-name], however you only need to provide the \[template-name] to the creation command.

> You can find a list of available templates by searching for ["cra-template-\*"](https://www.npmjs.com/search?q=cra-template-*) on npm.

Our [Custom Templates](https://create-react-app.dev/docs/custom-templates) documentation describes how you can build your own template.

#### Creating a TypeScript app[#](https://create-react-app.dev/docs/getting-started#creating-a-typescript-app)

You can start a new TypeScript app using templates. To use our provided TypeScript template, append --template typescript to the creation command.

If you already have a project and would like to add TypeScript, see our [Adding TypeScript](https://create-react-app.dev/docs/adding-typescript) documentation.

### Selecting a package manager[#](https://create-react-app.dev/docs/getting-started#selecting-a-package-manager)

When you create a new app, the CLI will use [Yarn](https://yarnpkg.com/) to install dependencies (when available). If you have Yarn installed, but would prefer to use npm, you can append --use-npm to the creation command. For example:

## Output[#](https://create-react-app.dev/docs/getting-started#output)

Running any of these commands will create a directory called my-app inside the current folder. Inside that directory, it will generate the initial project structure and install the transitive dependencies:

No configuration or complicated folder structures, only the files you need to build your app. Once the installation is done, you can open your project folder:

## Scripts[#](https://create-react-app.dev/docs/getting-started#scripts)

Inside the newly created project, you can run some built-in commands:

### npm start or yarn start[#](https://create-react-app.dev/docs/getting-started#npm-start-or-yarn-start)

Runs the app in development mode. Open [http://localhost:3000](http://localhost:3000/) to view it in the browser.

The page will automatically reload if you make changes to the code. You will see the build errors and lint warnings in the console.

![](https://cdn.jsdelivr.net/gh/marionebl/create-react-app@9f6282671c54f0874afd37a72f6689727b562498/screencast-error.svg)

### npm test or yarn test[#](https://create-react-app.dev/docs/getting-started#npm-test-or-yarn-test)

Runs the test watcher in an interactive mode. By default, runs tests related to files changed since the last commit.

[Read more about testing](https://create-react-app.dev/docs/running-tests).

### npm run build or yarn build[#](https://create-react-app.dev/docs/getting-started#npm-run-build-or-yarn-build)

Builds the app for production to the build folder. It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.

Your app is ready to be deployed.

# Folder Structuremy-app/ README.md node_modules/ package.json public/ index.html favicon.ico src/ App.css App.js App.test.js index.css index.js logo.svg&#xA;&#xA;

After creation, your project should look like this:

For the project to build, **these files must exist with exact filenames**:

-   public/index.html is the page template;

-   src/index.js is the JavaScript entry point.

You can delete or rename the other files.

You may create subdirectories inside src. For faster rebuilds, only files inside src are processed by webpack. You need to **put any JS and CSS files inside src**, otherwise webpack won’t see them.

Only files inside public can be used from public/index.html. Read instructions below for using assets from JavaScript and HTML.

You can, however, create more top-level directories. They will not be included in the production build so you can use them for things like documentation.

If you have Git installed and your project is not part of a larger repository, then a new repository will be initialized resulting in an additional top-level .git directory.

# Developing Components in Isolationnpx -p @storybook/cli sb initnpm install --save react-styleguidistyarn add react-styleguidist "scripts": {+ "styleguide": "styleguidist server",+ "styleguide:build": "styleguidist build", "start": "react-scripts start",npm run styleguide&#xA;&#xA;

Usually, in an app, you have a lot of UI components, and each of them has many different states. For an example, a basic button component could have the following states:

-   In a regular state, with a text label.

-   In the disabled mode.

-   In a loading state.

Usually, it’s hard to see these states without running a sample app or some examples.

Create React App doesn’t include any tools for this by default, but you can add [Storybook for React](https://storybook.js.org/) ([source](https://github.com/storybooks/storybook)) or [React Styleguidist](https://react-styleguidist.js.org/) ([source](https://github.com/styleguidist/react-styleguidist)) to your project. **These are third-party tools that let you develop components and see all their states in isolation from your app**.

![](https://i.imgur.com/7CIAWpB.gif)

You can also deploy your Storybook or style guide as a static app. This way, everyone in your team can view and review different states of UI components without starting a backend server or creating an account in your app.

## Getting Started with Storybook[#](https://create-react-app.dev/docs/developing-components-in-isolation#getting-started-with-storybook)

Storybook is a development environment for React UI components. It allows you to browse a component library, view the different states of each component, and interactively develop and test components.

Run the following command inside your app’s directory:

After that, follow the instructions on the screen.

Learn more about React Storybook:

-   [Learn Storybook (tutorial)](https://learnstorybook.com/)

-   [Documentation](https://storybook.js.org/basics/introduction/)

-   [GitHub Repo](https://github.com/storybooks/storybook)

-   [Snapshot Testing UI](https://github.com/storybooks/storybook/tree/master/addons/storyshots) with Storybook + addon/storyshot

## Getting Started with Styleguidist[#](https://create-react-app.dev/docs/developing-components-in-isolation#getting-started-with-styleguidist)

Styleguidist combines a style guide, where all your components are presented on a single page with their props documentation and usage examples, with an environment for developing components in isolation, similar to Storybook. In Styleguidist you write examples in Markdown, where each code snippet is rendered as a live editable playground.

First, install Styleguidist:

Alternatively you may use yarn:

Then, add these scripts to your package.json:

Then, run the following command inside your app’s directory:

After that, follow the instructions on the screen.

Learn more about React Styleguidist:

-   [GitHub Repo](https://github.com/styleguidist/react-styleguidist)

-   [Documentation](https://react-styleguidist.js.org/docs/getting-started.html)

# Using HTTPS in Developmentset HTTPS=true&\&npm start($env:HTTPS = "true") -and (npm start)HTTPS=true npm startHTTPS=true SSL_CRT_FILE=cert.crt SSL_KEY_FILE=cert.key npm startCopy{ "start": "HTTPS=true react-scripts start"}&#xA;&#xA;

> Note: this feature is available with react-scripts@0.4.0 and higher.

You may require the dev server to serve pages over HTTPS. One particular case where this could be useful is when using [the "proxy" feature](https://create-react-app.dev/docs/proxying-api-requests-in-development) to proxy requests to an API server when that API server is itself serving HTTPS.

To do this, set the HTTPS environment variable to true, then start the dev server as usual with npm start:

### Windows (cmd.exe)[#](https://create-react-app.dev/docs/using-https-in-development#windows-cmdexe)

(Note: the lack of whitespace is intentional.)

### Windows (Powershell)[#](https://create-react-app.dev/docs/using-https-in-development#windows-powershell)

### Linux, macOS (Bash)[#](https://create-react-app.dev/docs/using-https-in-development#linux-macos-bash)

Note that the server will use a self-signed certificate, so your web browser will almost definitely display a warning upon accessing the page.

## Custom SSL certificate[#](https://create-react-app.dev/docs/using-https-in-development#custom-ssl-certificate)

To set a custom certificate, set the SSL_CRT_FILE and SSL_KEY_FILE environment variables to the path of the certificate and key files in the same way you do for HTTPS above. Note that you will also need to set HTTPS=true.

### Linux, macOS (Bash)[#](https://create-react-app.dev/docs/using-https-in-development#linux-macos-bash-1)

To avoid having to set the environment variable each time, you can either include in the npm start script like so:

Or you can create a .env file with HTTPS=true set. [Learn more about environment variables in CRA](https://create-react-app.dev/docs/adding-custom-environment-variables).

# Adding a Stylesheet.Button { padding: 20px;}_import_ React, { Component } _from_ 'react';_import_ './Button.css'; _// Tell webpack that Button.js uses these stylesclass_ Button _extends_ Component { render() { _// You can use them as regular CSS styles_ _return_ \<div className="Button" />; }}&#xA;&#xA;

This project setup uses [webpack](https://webpack.js.org/) for handling all assets. webpack offers a custom way of “extending" the concept of import beyond JavaScript. To express that a JavaScript file depends on a CSS file, you need to **import the CSS from the JavaScript file**:

## Button.css[#](https://create-react-app.dev/docs/adding-a-stylesheet#buttoncss)

## Button.js[#](https://create-react-app.dev/docs/adding-a-stylesheet#buttonjs)

**This is not required for React** but many people find this feature convenient. You can read about the benefits of this approach [here](https://medium.com/seek-blog/block-element-modifying-your-javascript-components-d7f99fcab52b). However you should be aware that this makes your code less portable to other build tools and environments than webpack.

In development, expressing dependencies this way allows your styles to be reloaded on the fly as you edit them. In production, all CSS files will be concatenated into a single minified .css file in the build output.

If you are concerned about using webpack-specific semantics, you can put all your CSS right into src/index.css. It would still be imported from src/index.js, but you could always remove that import if you later migrate to a different build tool.
