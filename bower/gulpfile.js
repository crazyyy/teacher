var gulp = require('gulp');
var mainBowerFiles = require('main-bower-files');
var googlecdn = require('gulp-google-cdn');

gulp.task('first', function () {
    return gulp.src('index.html')
        .pipe(googlecdn(require('./bower.json')))
        .pipe(gulp.dest('dist'));
});

gulp.task('third', function() {
    return gulp.src(mainBowerFiles({
      'overrides' : {
        'bootstrap' : {
          'main' : [
            '.dist/js/bootstrap.min.js',
            '.dist/css/bootstrap.min.css',
            '.dist/css/bootstrap-theme.min.css',

          ]
        }
      }
    }))
        .pipe(gulp.dest('dist/mainfiles'));
});
