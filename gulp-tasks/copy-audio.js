const gulp = require('gulp');

const copyAudio = () => {
    return gulp.src(['./src/audio/**/*']).pipe(gulp.dest('./dist/audio'));
};

module.exports = copyAudio;