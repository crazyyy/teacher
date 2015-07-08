var gulp = require('gulp'),
  browserSync = require('browser-sync'),
  reload =  browserSync.reload,
  basePaths = './';

gulp.task('watch', function () {
  browserSync({
    notify: false,
    port: 9191,
    server: {
      baseDir: basePaths
    }
  });

  gulp.watch([
    basePaths + '*.html'
  ]).on('change', reload);


})
