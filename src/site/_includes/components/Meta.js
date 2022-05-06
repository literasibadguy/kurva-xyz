


module.exports = (page, renderData = {}) => {
    const forbiddenCharacters = [{searchValue: /"/g, replaceValue: '&quot;'}];

    function getMetaByPlatform(platform) {

    }

    function renderFacebookMeta() {
        const meta = getMetaByPlatform('facebook');

        const type = pageUrl === '/' ? 'website' : 'article';

        let tags = (type === 'article' ? pageData.tags : null) || [];
    }
}