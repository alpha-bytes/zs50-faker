# zs50-faker

> Serving fake data for ZS50 since 2019. 

## Usage

This repo contains source files which are served (after build step) as Lambda functions on Netlify. [faker](https://www.npmjs.com/package/faker) is utilized to generate the random data. 

### Testing Locally

The [package.json](./package.json) file contains an npm script `serve` that can be used to test functions on a local server. This command first runs `tsc` to transpile Typescript src to js. Then, it calls the `netlify-lambda` cli to build the minified source to run. 

### Deploying Changes

New or changed source files must first be compiled to js via the `tsc` command. This will compile to the **build/src/js** folder. From there, simply commit and push a new commit to this repo's `master` branch. Netlify is integrated to this repo and will automatically pick up the changes, and build the end-of-chain functions. Netlify's build commands are controlled via the [netlify.toml](./netlify.toml) config file. 


