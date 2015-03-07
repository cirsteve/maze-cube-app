'use strict';

var browserify = require('browserify');
var gulp = require('gulp');
var transform = require('vinyl-transform');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');

var getBundleName = function () {
    var version = require('./package.json').version;
    var name = require('./package.json').name;
    return version + '.' + name + '.' + 'min';
};

gulp.task('javascript', function () {
       //transform regular node stream to gulp (buffered vinyl) stream
    var browserified = transform(function(filename) {
        var b = browserify(filename);
        return b.bundle();
    });

   return gulp.src('./static_src/js/**/*.js')
       .pipe(browserified)
       .pipe(sourcemaps.init({loadMaps: true}))
       // Add transformation tasks to the pipeline here.
       .pipe(uglify())
       .pipe(sourcemaps.write('./static/'))
       .pipe(gulp.dest('js/compiled.js'));
});

gulp.task('default', ['javascript']);
var watcher = gulp.watch('./static_src/js/**/*.js', ['javascript']);
      watcher.on('change', function(event) {
      console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
      });
