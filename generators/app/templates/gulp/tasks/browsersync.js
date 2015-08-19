'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync').create('bs');


module.exports = gulp.task('browser-sync',  function() {
  
   return browserSync.init({
        open: false,
        server: {
            baseDir: './build',
        }
    });
});


