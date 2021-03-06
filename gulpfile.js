var gulp        = require('gulp');
var browserSync = require('browser-sync').create();

// Static server
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('watch', ['browser-sync'], function () {
    gulp.watch("*.css").on('change', browserSync.reload);
    gulp.watch("*.js").on('change',browserSync.reload);
    gulp.watch("*.html").on('change', browserSync.reload);
});