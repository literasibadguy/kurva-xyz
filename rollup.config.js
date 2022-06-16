
const fs = require('fs');
const {join} = require('path');

const {nodeResolve} = require('@rollup/plugin-node-resolve');

const commonjs = require('@rollup/plugin-commonjs');

const {terser} = require('rollup-plugin-terser');

const postcss = require('rollup-plugin-postcss');

const pagesDir = './src/lib/pages';
const pages = fs.readdirSync(pagesDir, 'utf-8').map((p) => join(pagesDir, p));

const plugins = [
    nodeResolve(),
    commonjs(),
]

const devConfig = {
    input: ['./src/lib/app.js', ...pages],
    output: {
        dir: 'dist/js',
        format: 'esm'
    },
    watch: {
        clearScreen: false,
    },
    plugins: [...plugins, postcss()],
};

const productionConfig = {
    input: ['./src/lib/app.js', ...pages],
    output: {
      dir: 'dist/js',
      format: 'esm',
    },
    plugins: [
      ...plugins,
      postcss({
        minimize: true,
      }),
      terser({
        format: {
          // Remove all comments, including @license comments,
          // otherwise LHCI complains at us.
          comments: false,
        },
      }),
    ],
  };

  export default () => {
    switch (process.env.ELEVENTY_ENV) {
      case 'prod':
        return productionConfig;
      default:
        return devConfig;
    }
  };