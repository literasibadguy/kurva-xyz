
const {feed, index, individual} = require('./utils');

const tagsFeed = (tags) => feed(tags);

const tagsIndex = (tags) => {
    const href = '/tags/';
    const testTags = [
        'grid',
        'flex',
        'basic',
    ];

    return index(tags, href, testTags);
}

const tagsIndividual = (tags) => individual(tags);

module.exports  = {
    feed: tagsFeed,
    index:  tagsIndex,
    individual: tagsIndividual,
}