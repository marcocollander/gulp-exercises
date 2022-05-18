const { src, dest, watch, series, parallel } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();
const cssnano = require('gulp-cssnano');
const autoprefixer = require('gulp-autoprefixer');
const rename = require('gulp-rename');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');

const path = {
  sass: './src/sass/**/*.scss',
  js: './src/js/**/*.js',
  img: 'src/img/*',
  sassDest: './dist/css',
  jsDest: './dist/js',
  imgDest: './dist/img',
};

function sassCompiler(done) {
  src(path.sass)
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(cssnano())
    .pipe(
      rename({
        suffix: '.min',
      })
    )
    .pipe(dest(path.sassDest));
  done();
}

function javaScript(done) {
  src(path.js)
    .pipe(
      babel({
        presets: ['@babel/env'],
      })
    )
    .pipe(uglify())
    .pipe(rename({ suffix: '.min' }))
    .pipe(dest(path.jsDest));
  done();
}

function convertImage(done) {
  src(path.img).pipe(imagemin()).pipe(dest(path.imgDest));
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

watch([path.sass], sassCompiler);
watch([path.sass, path.js, path.img, './*.html']).on(
  'change',
  browserSync.reload
);

exports.default = series(
  sassCompiler,
  javaScript,
  convertImage,
  startBrowserSync
);
