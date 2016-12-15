'use strict';

var config = require('../config');
var gulp   = require('gulp');
var browserSync = require('browser-sync');

gulp.task('watch', ['browserSync', 'server'], function() {

  gulp.watch(config.scripts.src, ['javascript', browserSync.reload]);
  gulp.watch(config.styles.watch,  ['styles', browserSync.reload]);
  gulp.watch(config.images.src,  ['images', browserSync.reload]);
  gulp.watch(config.views.watch, ['views', browserSync.reload]);

});