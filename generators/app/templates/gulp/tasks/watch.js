'use strict';

var gulp = require('gulp');
var watch = require('gulp-watch');

module.exports = gulp.task('watch', function () {
  watch({ glob: [config.paths.src.scripts]}, ['lint']);
  watch({ glob: [config.paths.src.index]}, ['index']);
  watch({ glob: [config.paths.src.templates, config.paths.src.templatesHTML]}, ['templates']);
  watch({ glob: [config.paths.src.stylesGlob]}, ['styles']);
});
