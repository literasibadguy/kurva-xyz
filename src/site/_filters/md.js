
module.exports = (content, opts) => {
    if (!content) {
        return;
    }

    if (opts) {
        md.set(opts);
    }

    let inline = !content.includes('\n');

    if (inline && content.length > 200) {
        inline = false;
    }

    return inline ? md.renderInline(content) : md.render(content);
}