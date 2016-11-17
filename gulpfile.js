'use strict';

var gulp        = require('gulp');
var sass        = require('gulp-sass');
var webserver   = require('gulp-webserver');
var opn         = require('opn');
var concat      = require('gulp-concat');
var uglify      = require('gulp-uglify');

gulp.task('sass', function(){
    gulp.src('./source/css/*.scss')
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(gulp.dest('./source/css'))
});

gulp.task('scripts', function () {
    gulp.src(['./source/js/js.js'])
        .pipe(concat('js.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./source/js'))
});

gulp.task('webserver', function () {
    gulp.src('./source')
       .pipe(webserver({
           host:                'localhost',
           port:                '8000',
           livereload:          true,
           directoryListing:    false,
       }));
});

gulp.task('openbrowser', function () {
    opn('http://localhost:8000');
});

gulp.task('watch', function () {
    gulp.watch('./source/css/*.scss', ['sass']);
    gulp.watch('./source/js/*.js', ['scripts']);
});

gulp.task('build', ['sass', 'scripts']);

gulp.task('default', ['build', 'webserver', 'watch', 'openbrowser']);