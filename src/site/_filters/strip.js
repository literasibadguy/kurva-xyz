

module.exports = (text, additionallyForbidden) => {
    let cleaned = String(text || '');

    const forbidden  = [{searchValue: /`/g, replaceValue: ''}];

    [...forbidden, ...(additionallyForbidden || [])].forEach((rule) => {
        cleaned = cleaned.replace(rule.searchValue, rule.replaceValue);
    });

    return cleaned;
};