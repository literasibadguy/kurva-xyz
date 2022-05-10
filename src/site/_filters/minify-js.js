
const {minify} = require('terser');

function minifyJs(code, callback) {
    if (process.env.ELEVENTY_ENV !== 'prod') {
        callback(null, code);
        return;
    }

    minify(code)
    .then((result) => {
      callback(null, result.code);
    })
    .catch((err) => {
      console.error('Terser error: ', err);
      // Fail gracefully.
      callback(null, code);
    });
}

module.exports = {minifyJs};