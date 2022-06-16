
const path = require('path');
const fs = require('fs');

const includePaths = path.join(__dirname, '../');

/**
 * @param {string} arg
 * @return {string}
 */
module.exports = (arg) => {
    const p = path.join(includePaths, arg);
    return fs.readFileSync(p, 'utf-8');
}