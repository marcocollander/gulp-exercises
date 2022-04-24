// Compose tasks
// To have your tasks execute in order, use the series() method.

const { series } = require("gulp");

const transpile = (cb) => {
  console.log("This is task transpile");
  cb();
};

const bundle = (cb) => {
  console.log("This is task bundle");
  cb();
};

exports.build = series(transpile, bundle);
