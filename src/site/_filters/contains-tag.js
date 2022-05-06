
module.exports = (feed, tags) => {
    return (
        !!feed.data.tags &&
        tags.filter((tag) => feed.data.tags.indexOf(tag) > -1).length > 0
    )
}