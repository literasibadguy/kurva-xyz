const gulp = require('gulp');

const copyMisc = () => {
    return gulp.src(['./src/misc/**/*']).pipe(gulp.dest('./dist'));
};

module.exports = copyMisc;