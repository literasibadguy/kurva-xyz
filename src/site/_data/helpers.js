

const {hashForProd} = require('./lib/hash');
const path = require('path');

module.exports = {
    hashForProd,
    values: Object.values,
    join: path.join,
}