'use strict';

const gulp = require('gulp');
const watch = require('gulp-watch');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');

// JS
gulp.task('js', function() {
  return gulp.src('./js/*.js')
    .pipe(gulp.dest('./public/javascripts'));
});

gulp.task('sass', function () {
  return gulp.src('./public/stylesheets/style.sass')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 6 versions'],
      cascade: false
    }))
    .pipe(gulp.dest('./public/stylesheets'));
});

gulp.task('watch', function() {
  gulp.watch('js/*.js', ['js']);
  gulp.watch('./public/stylesheets/**/*.sass', ['sass']);
});