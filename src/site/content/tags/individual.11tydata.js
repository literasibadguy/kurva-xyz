
const {individual} = require('../../_collections/hooks/tags');

module.exports = {
    pagination: {
        before: (tags) => individual(tags),
    }
};