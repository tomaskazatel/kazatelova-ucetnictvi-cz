'use strict';

var gulp        = require('gulp');
var sass        = require('gulp-sass');
var webserver   = require('gulp-webserver');
var opn         = require('opn');
var concat      = require('gulp-concat');
var uglify      = require('gulp-uglify');
var del         = require('del');


gulp.task('build', function () {

    del(['./output/**/*']);

   //copy html files to output
   gulp.src('./source/**/*.html', {base: 'source'})
       .pipe(gulp.dest('./output'));

   //copy images
   gulp.src('./source/**/*.{ico,png,jpeg,jpg,gif}', {base: 'source'})
       .pipe(gulp.dest('./output'));

   //generated css from sass
   gulp.src('./source/css/*.scss')
       .pipe(sass({outputStyle: 'compressed'}))
       .pipe(gulp.dest('./output/css'));

   //concat and minify js
   gulp.src('./source/js/*.js')
       .pipe(concat('js.min.js'))
       .pipe(uglify())
       .pipe(gulp.dest('./output/js'));

});

gulp.task('run', function () {

    gulp.src('./output')
        .pipe(webserver({
            host:                'localhost',
            port:                '8000',
            livereload:          true,
            directoryListing:    false
        }));

    opn('http://localhost:8000');

});

gulp.task('watch', function () {

    gulp.watch('./source/**/*', ['build']);

});

gulp.task('default', ['build','watch','run']);