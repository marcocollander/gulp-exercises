const { src, dest, watch, series, parallel } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();
const cssnano = require('gulp-cssnano');
const autoprefixer = require('gulp-autoprefixer');
const rename = require('gulp-rename');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');

function sassCompiler(done) {
  src('./src/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(cssnano())
    .pipe(
      rename({
        suffix: '.min',
      })
    )
    .pipe(dest('./dist/css'));
  done();
}

function javaScript(done) {
  src('./src/js/app.js')
    .pipe(
      babel({
        presets: ['@babel/env'],
      })
    )
    .pipe(uglify())
    .pipe(rename({ suffix: '.min' }))
    .pipe(dest('./dist/js'));
  done();
}

function convertImage(done) {
  src('src/img/*').pipe(imagemin()).pipe(dest('dist/img'));
  done();
}

function startBrowserSync(done) {
  browserSync.init({
    server: {
      baseDir: './',
    },
  });
  done();
}

watch(['./src/sass/**/*.scss'], sassCompiler);
watch([
  './src/sass/**/*.scss',
  './src/js/**/*.js',
  './src/img/*',
  './*.html',
]).on('change', browserSync.reload);

exports.default = series(
  sassCompiler,
  javaScript,
  convertImage,
  startBrowserSync
);
