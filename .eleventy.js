
const eleventyImage = require("@11ty/eleventy-img");
const tags = require("./src/site/_collections/tags");
// const invitations = require("./src/site/_collections/invitations");

const Meta = require('./src/site/_includes/components/Meta');

const {memoize, findByUrl} = require('./src/site/_filters/find-by-url');
const pathSlug = require('./src/site/_filters/path-slug');
const containsTag = require("./src/site/_filters/contains-tag");
const md = require("./src/site/_filters/md");
const consoleDump = require("./src/site/_filters/console-dump");
const strip = require("./src/site/_filters/strip");
const { minifyJs } = require("./src/site/_filters/minify-js");
const { cspHash } = require("./src/site/_filters/csp-hash");
const helpers = require('./src/site/_data/helpers');
const includeRaw = require('./src/site/_includes/components/includeRaw');
const { hashForProd } = require('./src/site/_filters/csp-hash');

const {minifyHtml} = require('./src/site/_transforms/minify-html');

global.__basedir = __dirname;

module.exports = function (config) {
    console.log('Eleventy is building..., please wait...');
    const isProd = process.env.ELEVENTY_ENV === 'prod';
    const isStaging = process.env.ELEVENTY_ENV === 'staging';

    // config.setLibrary('md', marfkdown);

    config.addCollection("feeds", function(collection) {
        const tag = 'feeds';
        return collection.getFilteredByTag("feeds");
    });
    config.addCollection('tags', tags);
    // config.addCollection('invitations', invitations);
    config.addCollection('memoized', (collection) => {
        return memoize(collection.getAll());
    })

    config.addFilter('consoleDump', consoleDump);
    config.addFilter('findByUrl', findByUrl);
    config.addFilter('pathSlug', pathSlug);
    config.addFilter('containsTag', containsTag);
    config.addFilter('md', md);
    config.addFilter('strip', strip);
    config.addNunjucksAsyncFilter('minifyJs', minifyJs);
    config.addFilter('cspHash', cspHash);
    config.addFilter('hashForProd', hashForProd);
    config.addShortcode('helpers', helpers);

    config.addShortcode('Meta', Meta);
    config.addShortcode('includeRaw', includeRaw);

    config.setUseGitIgnore(false);

    if (isProd || isStaging) {
        config.addTransform('minifyHtml', minifyHtml);
      }

    config.addNunjucksAsyncShortcode('Image', async (filepath, alt, classes, sizes) => {
        let options = {
            widths: [320, 640],
            urlPaths: "/src/images",
            outputDir: "dist/img"
        };
        let stats = await eleventyImage(filepath, options);

        return eleventyImage.generateHTML(stats, {
			alt,
			loading: "lazy",
			decoding: "async",
			sizes: sizes || "(min-width: 22em) 30vw, 100vw",
			class: classes,
		});
    })

    return {
        dir: {
            input: 'src/site/content',
            output: 'dist',
            data: '../_data',
            includes: '../_includes',
        },
        templateFormats: ['njk', 'md'],
        htmlTemplateEngine: 'njk',
        markdownTemplateEngine: 'njk',
        passthroughFileCopy: false,
    }
}