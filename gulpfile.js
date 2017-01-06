'use strict';

const gulp = require('gulp');
const watch = require('gulp-watch');

// JS
gulp.task('js', function() {
  return gulp.src('./js/*.js')
    .pipe(gulp.dest('./public/javascripts'));
});

gulp.task('watch', function() {
  gulp.watch('js/*.js', function() {
    gulp.run('js');
  });
});