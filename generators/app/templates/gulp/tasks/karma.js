'use strict';

var gulp = require('gulp');
var Server = require('karma').Server;
var path = require("path");


module.exports = gulp.task('karma', function (done) {
  new Server({
    configFile: path.join(__dirname, '../..', 'karma.conf.js'),
  }, done).start();

})

