const YAML = require('js-yaml');
const fs = require('fs');
const path = require('path');

const supportedTags = (
  YAML.load(
    fs.readFileSync(path.join(__dirname, '../_data/tags.yml'), 'utf-8'),
  )
);

/** @type Tags */
let processedCollection;

function createTag(key, tagData = {}) {
    const href= `/tags/${key}/`;

    const tag = {
        ...tagData,
        data: {
            tags: [key],
        },
        description: supportedTags[key].description,
        elements: [],
        href,
        key,
        title: supportedTags[key].title,
        url: href,
    };

    return tag;
}

module.exports = (collections) => {
    if (processedCollection) {
        return processedCollection;
    }

    /** @type Tags */
  const tags = Object.fromEntries(
    Object.keys(supportedTags).map((tag) => [
      tag,
      createTag(tag),
    ]),
  );

  const posts = collections.getFilteredByGlob('**/*.md');

  for (const post of posts) {
    post.data.tags = [post.data.tags ?? []].flat();

    if (post.data.tags.length) {
      for (const postsTag of post.data.tags) {
        if (postsTag in supportedTags) {
          tags[postsTag].elements.push(post);
        }
      }
    }
  }

  if (collections) {
    processedCollection = tags;
  }

  console.log(tags);
  
  return tags;

}