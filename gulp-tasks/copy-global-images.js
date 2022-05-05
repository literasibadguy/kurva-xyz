const gulp = require('gulp');

const copyGlobalImages = () =>
    gulp.src('./src/images/**/*').pipe(gulp.dest('./dist/images'));

module.exports = copyGlobalImages;
