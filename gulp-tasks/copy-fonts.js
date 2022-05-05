const gulp = require('gulp');

const copyFonts = () => {
    return gulp.src('src/fonts/**/*').pipe(gulp.dest('dist/fonts/'));
};

module.exports = copyFonts;