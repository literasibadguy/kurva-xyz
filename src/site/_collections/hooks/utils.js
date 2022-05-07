
const addPagination = require('../../_utils/add-pagination');
const {PAGINATION_COUNT} = require('../../_utils/constants');

const feed = (items) => {
    const filteredFeed = [];

    if (!['prod', 'staging'].includes(process.env.ELEVENTY_ENV)) {
        return filteredFeed;
    }

    for (const item of items) {
        if (item.elements.length > 0) {
            filteredFeed.push({
                ...item,
                elements: item.elements.slice(0, PAGINATION_COUNT),
            });
        }
    }

    return filteredFeed;
};

const index =  (items, href, testItems) => {
    let itemsWithPosts = [];

    if (process.env.PERCY)  {
        itemsWithPosts = items.filter((item) => testItems.includes(item.key));
    } else {
        itemsWithPosts = items.filter((item) => item.elements.length > 0);
    }

    itemsWithPosts.sort((a, b) => a.title.localeCompare(b.title));

    return addPagination(itemsWithPosts, {href});
};

const individual = (items) => {
    let paginated = [];

    for (const item of items)  {
        if (item.elements.length > 0) {
            paginated = paginated.concat(
                addPagination(item.elements, item),
            );
        }
    }

    return paginated;
}

module.exports  = {
    feed,
    index,
    individual
};