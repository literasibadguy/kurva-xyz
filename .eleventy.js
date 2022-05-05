
const eleventyImage = require("@11ty/eleventy-img");
const tags = require("./src/site/_collections/tags");

global.__basedir = __dirname;

module.exports = function (config) {

    config.addCollection("feeds", function(collection) {
        const tag = 'feeds';
        return collection.getFilteredByTag("feeds");
    });
    config.addCollection('tags', tags);

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