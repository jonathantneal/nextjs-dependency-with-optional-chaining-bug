# NextJS dependency with optional chaining bug

# Bug report

## Describe the bug

Using a dependency with optional chaining throws NextJS, at least crashing the page and potentially crashing the process depending on where it is used.

Optional chaining feature is supported in at least the last two versions of all modern browsers, and it works out of the box in Node 14 and Node 15.

When a dependency uses optional chaining, it seems like it passes through some JavaScript processor that cannot handle this feature. This is what leads NextJS to forward the error by saying that I may “_need an appropriate loader to handle this file type, currently no loaders are configured to process this file._”

I did try to configure Babel filters using an `.babelrc` configuration, but it did not have any affect on the module. Also, I’m not interested in transpiling this feature. I only want to ship it.

## To Reproduce

Steps to reproduce the behavior, please provide code snippets or a repository:

1. Checkout [nextjs-dependency-with-optional-chaining-bug](https://github.com/jonathantneal/nextjs-dependency-with-optional-chaining-bug), install the dependencies, and run the `start` script.
2. Visit the server.
3. See error (pasted below)

Alternatively, visit this [CodeSandbox reproduction](https://codesandbox.io/s/github/jonathantneal/nextjs-dependency-with-optional-chaining-bug).

```sh
yarn
yarn start
```

> Failed to compile
> ```
> ./node_modules/some-dependency/index.mjs 3:31
> Module parse failed: Unexpected token (3:31)
> You may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders
> | export default () => {
> | 	console.log(typeof globalThis)
> > 	console.log(typeof globalThis?.navigator)
> | }
> |
> ```
> This error occurred during the build process and can only be dismissed by fixing the error.


## Expected behavior

Using optional chaining in a dependency should not throw the page or the process. It should only fail if either Node or my browser does not support the feature.

## Screenshots

![Screen shot of the NextJS error](https://user-images.githubusercontent.com/188426/102785049-4e59c600-436b-11eb-8e2c-2ca28150fa7d.jpg)

## System information

- OS: macOS
- Version of Next.js: 10.0.3
- Version of Node.js: 15.4.0
- Deployment: next dev
