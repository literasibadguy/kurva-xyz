

const htmlMinifier = require('@minify-html/js');
const path = require('path');
const {URL} = require('url');
const stagingUrls =
  require('../../../tools/lhci/lighthouserc').ci.collect.url.map((url) =>
    path.join('dist', new URL(url).pathname, 'index.html'),
  );

const config = htmlMinifier.createConfiguration({
    // See https://docs.rs/minify-html/latest/minify_html/struct.Cfg.html
  });


const isProd = process.env.ELEVENTY_ENV === 'prod';
const isStaging = process.env.ELEVENTY_ENV === 'staging';

const minifyHtml = (content, outputPath) => {
    if (
        (isProd  && outputPath && outputPath.endsWith('.html')) ||
        (isStaging && stagingUrls.includes(outputPath))) {
            try {
                content = htmlMinifier.minify(content, config);
            } catch (err) {
                console.warn(err, 'while minifying', outputPath);
            }
    }

    return content;
};

module.exports = {minifyHtml};