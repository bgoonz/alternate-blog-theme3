## Quick Start 🏎

## Develop Locally

1.  [Create a site](https://app.stackbit.com/create?theme=https://github.com/stackbit-themes/fjord-nextjs&utm_source=theme-readme&utm_medium=referral&utm_campaign=stackbit_themes) from this theme using Stackbit.

1.  Once finished, you will be redirected to Stackbit Studio where you will be
    able to edit the content using the free on-page editing experience, and
    publish new versions of your site.

1.  To further develop your site, clone the generated repository.

1.  Install dependencies

    run npm install

1.  Start the Next.js local development server:

        npm run develop

1.  Open [http://localhost:3000/](http://localhost:3000/) in the browser to see
    your site. You can now edit the site contents, and the browser will
    live-update your changes. 🎉

## Building for production 🏗

To build a static site for production, or test locally how it worls, run the
following command:

    npm run build

The exported site will be written to `out` folder. The contents of this folder
can be deployed by serverless deployment platform such as [Netlify](https://www.netlify.com).
You can start a local server serving the static files from the `out` folder, for
example by installing and running `http-server`:

    npm install http-server -g
    http-server out
