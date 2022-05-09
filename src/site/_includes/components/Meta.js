const {html} = require('common-tags');
const site = require('../../_data/site');
const strip = require('../../_filters/strip');
const {findByUrl} = require('../../_filters/find-by-url');

module.exports = (page, renderData = {}) => {
    const forbiddenCharacters = [{searchValue: /"/g, replaceValue: '&quot;'}];
    const pageData = {
        ...findByUrl(page.url)?.data,
        ...renderData,
        page,
    };
    const pageUrl = pageData.page.url;
    const canonical = new URL(pageUrl, site.url).href;

    function getMetaByPlatform(platform) {
        const social = pageData.social && pageData.social[platform]
            ? pageData.social[platform]
            : pageData;

        const title = strip(
            social.title || (social.path && social.path.title),
            forbiddenCharacters,
        );
        const description = strip(social.description || (social.path && social.path.description),
            forbiddenCharacters,
        );
        let thumbnail = social.thumbnail || social.hero || social.cover;
        const alt = social.alt || site.name;

        return {title, description, thumbnail, alt};
    }

    function renderGoogleMeta() {
        const meta = getMetaByPlatform('google');
        return html`
            <meta itemprop="name" content="${meta.title}" />
            <meta itemprop="description" content="${meta.description}" />
        `;
    }

    function renderTwitterMeta() {
        const meta = getMetaByPlatform('twitter');

        const htmlCharacters = [
            {searchValue: /</g, replaceValue: '&lsaquo;'},
            {searchValue: />/g, replaceValue: '&rsaquo;'},
        ];
        const title = strip(meta.title, htmlCharacters);
        const description = strip(meta.description, htmlCharacters);

        // You need thumbnail for these.
        return html`
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="${title}" />
        <meta name="twitter:description" content="${description}" />
        `
    }

    function renderCanonicalMeta() {
        return html` <link rel="canonical" href="${canonical}" />`;
    }


    function renderFacebookMeta() {
        const meta = getMetaByPlatform('facebook');

        const type = pageUrl === '/' ? 'website' : 'article';

        let tags = (type === 'article' ? pageData.tags : null) || [];
        tags = tags.filter((tag) => tag !== 'feeds');

        // prettier-ignore
    return html`
    <meta property="og:locale" content="id" />
    <meta property="og:type" content="${type}" />
    <meta property="og:url" content="${canonical}" />
    <meta property="og:site_name" content="${site.title}" />
    <meta property="og:title" content="${meta.title}" />
    <meta property="og:description" content="${meta.description}" />
    <meta property="og:image" content="${meta.thumbnail}" />
    <meta property="og:image:alt" content="${meta.alt}" />
    ${tags.map((tag) => html`<meta property="tag" content="${tag}" />`)}
  `;
    }

    // prettier-ignore
  return html`
  <title>${strip(pageData.title
    || (pageData.path && pageData.path.title)
    || site.title)}</title>
  <meta name="description" content="${strip(pageData.description
    || (pageData.path && pageData.path.description), forbiddenCharacters)}" />

  ${renderCanonicalMeta()}
  ${renderGoogleMeta()}
  ${renderFacebookMeta()}
  ${renderTwitterMeta()}
`;
}