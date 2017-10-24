let gulp = require('gulp');
let scss = require('gulp-sass');
let uglify = require('gulp-uglify');
let css = require('gulp-clean-css');
let fs = require('fs');
let concat = require('gulp-concat');
let plumber = require('gulp-plumber');
let plugins = require('gulp-load-plugins');
let run = require('run-sequence');
let img = require('gulp-imagemin');

gulp.task('connect', () => {
    plugins().connect.server({
        'root': 'dist/html',
        'livereload': true,
        'host': 'localhost',
        'port': 8081
    });
});