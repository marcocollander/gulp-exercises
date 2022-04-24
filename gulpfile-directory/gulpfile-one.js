const { series } = require("gulp");

// The `clean` function is not exported so it can be considered a private task.
// It can still be used within the `series()` composition.

const clean = (cb) => {
  console.log("***Task clean***");
  cb();
};

// The `build` function is exported so it is public and can be run with the `gulp` command.
// It can also be used within the `series()` composition.
const build = (cb) => {
  console.log("***Task build***");
  cb();
};

exports.build = build;
exports.default = series(clean, build);
