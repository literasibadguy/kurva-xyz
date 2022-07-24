
const gulp = require('gulp');
const copyFonts = require('./gulp-tasks/copy-fonts');
const copyGlobalImages = require('./gulp-tasks/copy-global-images');
const sassTask = require('./gulp-tasks/sass');
const copyMisc = require('./gulp-tasks/copy-misc');
const copyAudio = require('./gulp-tasks/copy-audio');

gulp.task('sass', sassTask);
gulp.task('copy-misc', copyMisc);

gulp.task(
    'build',
    gulp.parallel(
        copyGlobalImages,
        copyMisc,
        copyFonts,
        sassTask,
        copyAudio,
    )
);

gulp.task('watch', () => {
    gulp.watch('./src/images/**/*', {ignoreInitial: true}, copyGlobalImages);
    gulp.watch('./src/misc/**/*', {ignoreInitial: true}, copyMisc);
    gulp.watch('./src/scss/**/*.scss', {ignoreInitial: true}, sassTask);
})