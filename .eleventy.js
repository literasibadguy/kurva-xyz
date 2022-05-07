
const eleventyImage = require("@11ty/eleventy-img");
const tags = require("./src/site/_collections/tags");

const {memoize, findByUrl} = require('./src/site/_filters/find-by-url');
const pathSlug = require('./src/site/_filters/path-slug');
const containsTag = require("./src/site/_filters/contains-tag");
const md = require("./src/site/_filters/md");


global.__basedir = __dirname;

module.exports = function (config) {

    // config.setLibrary('md', marfkdown);

    config.addCollection("feeds", function(collection) {
        const tag = 'feeds';
        return collection.getFilteredByTag("feeds");
    });
    config.addCollection('tags', tags);
    config.addCollection('memoized', (collection) => {
        return memoize(collection.getAll());
    })

    config.addFilter('findByUrl', findByUrl);
    config.addFilter('pathSlug', pathSlug);
    config.addFilter('containsTag', containsTag);
    config.addFilter('md', md);

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
            data: '../data',
            includes: '../_includes',
        },
        templateFormats: ['njk', 'md'],
        htmlTemplateEngine: 'njk',
        markdownTemplateEngine: 'njk',
        passthroughFileCopy: false,
    }
}