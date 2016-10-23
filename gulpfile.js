'use strict';

const gulp = require('gulp');

// JS
gulp.task('js', function() {

  return gulp.src('./source/js/*.js')
    .pipe(gulp.dest('./public/javascripts'));

});