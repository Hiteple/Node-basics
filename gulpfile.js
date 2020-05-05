const gulp = require('gulp');
const server = require('gulp-server-livereload');

gulp.task('build', (cb) => {
    console.log('Building the app');
    cb();
});

// Src and options using gulp server
gulp.task('serve', () => {
    gulp.src('www')
        .pipe(server({
            liveReload: true,
            open: true,
            port: 3000
        }));
});

gulp.task('default', gulp.series('build', 'serve'));
