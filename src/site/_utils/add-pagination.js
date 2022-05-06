
const constants = require('./constants');

module.exports = function addPagination(elements, additionalData = {}) {
    if (!Array.isArray(elements)) {
        throw new Error(
            `addPagination only accepts an array, you passed in a ${typeof elements}`,
        );
    }

    if (typeof additionalData !== 'object') {
        throw new Error('additionalData must be an object');
    }

    const pageCount = constants.PAGINATION_COUNT;
    const paginated = [];
    const pages = Math.ceil(elements.length / pageCount);

    for (let i = 0; i < pages; i++) {
        const startFrom = i * pageCount;
        paginated.push({
            ...additionalData,
            elements: elements.slice(startFrom, startFrom + pageCount),
            index: i,
            pages
        });
    }

    return paginated;
}