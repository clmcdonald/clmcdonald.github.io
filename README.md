# Personal website

This project hosts a React application that powers the [clmcdonald.com](https://clmcdonald.com) website.

## Architecture

The site is hosted by Cloudflare. Commits to the default branch automatically get deployed.

## Development

1. Clone the repository
2. Run `yarn build` to generate a fresh build. If you don't do this, you will see TypeScript errors from Tanstack Router, which requires generated type files
3. To start the development server, run `yarn dev`
