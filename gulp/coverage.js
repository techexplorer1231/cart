'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');

var $ = require('gulp-load-plugins')();

gulp.task('coverage', function () {
  return gulp.src('/coverage/**/lcov.info')
    .pipe($.coveralls());
});
