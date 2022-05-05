
const gulp = require('gulp');
const copyFonts = require('./gulp-tasks/copy-fonts');
const copyGlobalImages = require('./gulp-tasks/copy-global-images');
const sassTask = require('./gulp-tasks/sass');

gulp.task('sass', sassTask);

gulp.task(
    'build',
    gulp.parallel(
        copyGlobalImages,
        copyFonts,
        sassTask,
    )
);

gulp.task('watch', () => {
    gulp.watch('./src/images/**/*', {ignoreInitial: true}, copyGlobalImages);
    gulp.watch('./src/scss/**/*.scss', {ignoreInitial: true}, sassTask);
})