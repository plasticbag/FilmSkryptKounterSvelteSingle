# Svelte + TS + Vite

# + Jest?
ran npm install jest
ran npm i --save-dev @types/jest
added "test" : "jest" to package.json
npm install --save-dev jest ts-jest

//"type" : "module", // keeping this in allows me to do "npm run build", but I need it out in order to run jest tests "npm test"
Attempting to unlock Jest in ECMA mode: https://jestjs.io/docs/ecmascript-modules
// Got errors because because our package.json contains "type": "module". In ES modules, you can't use CommonJS features like module.exports directly.

 * Setup Jest with ES module support:
npm install --save-dev jest @jest/globals babel-jest

 * Use a Babel config: Create a .babelrc file to ensure Jest can handle ES modules. You can configure Babel like this:
{
  "presets": ["@babel/preset-env"]
}

 * Update/Create jest.config.js to work with ES modules
export default {
  transform: {
    '^.+\\.js$': 'babel-jest',
    '^.+\\.ts$': 'ts-jest',
    '^.+\\.svelte$': ['svelte-jester', { preprocess: true }]
  },
  extensionsToTreatAsEsm: ['.ts', '.svelte'],
  moduleFileExtensions: ['js', 'ts', 'svelte'],
  testEnvironment: 'jsdom'
};
if you're using Svelte, you may need to install svelte-jester.
npm install --save-dev svelte-jester

* Allow package.json to use experimental modules
"scripts": 
{
  "test": "node --experimental-vm-modules node_modules/jest/bin/jest.js"
}

## Setup Instructions ##

1. [VS Code](https://code.visualstudio.com/) + [Svelte](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode).
2. From the root directory open up a terminal
3. run "npm install"
4. Then in order to run an update and locally host the site. "npm run dev"
5. It will print an address that you can visit locally from your browser.

## SquareSpace Deploy Instructions
1. Inside of dist/ is an index.html
2. This neeeds to be copied over and into an html snippet on squarespace
    - It also makes a vite.svg file but that isn't needed apparently.
3. go to squarespace.com, enter credentials
4. Select the ATL website
5. Go to "Pages"
5. Browse down to the un-linked pages. Find "SkryptKounterNew"
6. Hit Edit
7. Select the HTML snippet
8. Select Edit
9. Copy and paste the contents of index.html into here

## Need an official Svelte framework?

Check out [SvelteKit](https://github.com/sveltejs/kit#readme), which is also powered by Vite. Deploy anywhere with its serverless-first approach and adapt to various platforms, with out of the box support for TypeScript, SCSS, and Less, and easily-added support for mdsvex, GraphQL, PostCSS, Tailwind CSS, and more.

## Technical considerations

**Why use this over SvelteKit?**

- It brings its own routing solution which might not be preferable for some users.
- It is first and foremost a framework that just happens to use Vite under the hood, not a Vite app.

This template contains as little as possible to get started with Vite + TypeScript + Svelte, while taking into account the developer experience with regards to HMR and intellisense. It demonstrates capabilities on par with the other `create-vite` templates and is a good starting point for beginners dipping their toes into a Vite + Svelte project.

Should you later need the extended capabilities and extensibility provided by SvelteKit, the template has been structured similarly to SvelteKit so that it is easy to migrate.

**Why `global.d.ts` instead of `compilerOptions.types` inside `jsconfig.json` or `tsconfig.json`?**

Setting `compilerOptions.types` shuts out all other types not explicitly listed in the configuration. Using triple-slash references keeps the default TypeScript setting of accepting type information from the entire workspace, while also adding `svelte` and `vite/client` type information.

**Why include `.vscode/extensions.json`?**

Other templates indirectly recommend extensions via the README, but this file allows VS Code to prompt the user to install the recommended extension upon opening the project.

**Why enable `allowJs` in the TS template?**

While `allowJs: false` would indeed prevent the use of `.js` files in the project, it does not prevent the use of JavaScript syntax in `.svelte` files. In addition, it would force `checkJs: false`, bringing the worst of both worlds: not being able to guarantee the entire codebase is TypeScript, and also having worse typechecking for the existing JavaScript. In addition, there are valid use cases in which a mixed codebase may be relevant.

**Why is HMR not preserving my local component state?**

HMR state preservation comes with a number of gotchas! It has been disabled by default in both `svelte-hmr` and `@sveltejs/vite-plugin-svelte` due to its often surprising behavior. You can read the details [here](https://github.com/rixo/svelte-hmr#svelte-hmr).

If you have state that's important to retain within a component, consider creating an external store which would not be replaced by HMR.

```ts
// store.ts
// An extremely simple external store
import { writable } from 'svelte/store'
export default writable(0)
```
