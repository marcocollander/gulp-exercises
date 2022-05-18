const gulp = require("gulp");

const showGulp = (cb) => {
  console.log(gulp);
  cb();
};

exports.default = showGulp;
