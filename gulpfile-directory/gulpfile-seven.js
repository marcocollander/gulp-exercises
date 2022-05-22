// Aby zadania zostały wykonane w odpowiedniej kolejności, użyj metody series().
// Aby zadania działały z maksymalną współbieżnością, połącz je z metodą parallel().
const { series } = require('gulp');
const { parallel } = require('gulp');

function clean(done) {
  console.log('Zadanie clean');
  done();
}

function build(done) {
  console.log('Zadanie build');
  done();
}

function transpile(done) {
  console.log('Zadanie transpile');
  done();
}

function bundle(done) {
  console.log('Zadanie bundle');
  done();
}

function javascript(done) {
  console.log('Zadanie javascript');
  done();
}

function css(done) {
  console.log('Zadanie css');
  done();
}

exports.build = build;
exports.tranbundle = series(transpile, bundle);
exports.jav_css = parallel(javascript, css);
exports.default = series(clean, build);
