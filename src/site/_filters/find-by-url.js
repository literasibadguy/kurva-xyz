
let memo;

const memoize = (collection) => {
    memo = {};
    collection.forEach((item) => {
        if (item.url) {
            const url = item.url;
            if (memo[url]) {
                throw new Error(`Found duplicate post url: '${url}'`);
            }

            memo[url] = item;
        }
    });

    return collection;
};


const findByUrl = (url) => {
    if (!url) {
        throw new Error('url is either null or undefined');
    }

    if (!memo) {
        throw new Error('No collection has been memoized yet.');
    }

    return memo[url];s
}

module.exports = {memoize, findByUrl};