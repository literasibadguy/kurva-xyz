
module.exports = (slug, path) => {
    if (!path) {
        return slug;
    }

    return `${path}/${slug}`;
}