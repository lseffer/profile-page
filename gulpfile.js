'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function () {
    return gulp.src('./style/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            cascade: false
        }))
        .pipe(gulp.dest('./css'));
});

gulp.task('css', function () {
    return gulp.src(['./style/css/**/*.css', './node_modules/font-awesome/css/font-awesome.css'])
        .pipe(gulp.dest('./css'))
});

gulp.task('fonts', function () {
    return gulp.src('./node_modules/font-awesome/fonts/*')
        .pipe(gulp.dest('./fonts'))
});


gulp.task('sass:watch', function () {
    gulp.watch('./style/**/*.scss', ['sass']);
});

gulp.task('default', gulp.series(['sass', 'css', 'fonts']));
