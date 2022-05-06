
const {feed} = require('../../_collections/hooks/tags');

module.exports = {
    pagination: {
        before: (tags) => feed(tags)
    }
}