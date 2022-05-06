

const {index} = require('../../_collections/hooks/tags');

module.exports = {
    pagination: {
        before: (tags) => index(tags),
    }
}