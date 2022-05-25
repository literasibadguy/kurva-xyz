
const fs = require('fs');
const {join} = require('path');

const {nodeResolve} = require('@rollup/plugin-node-resolve');

const commonjs = require('@rollup/plugin-commonjs');

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
    plugins: plugins,
};

export default () => {
    return devConfig;
}