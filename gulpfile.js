const { parallel } = require("gulp");

const sass = (cb) => {
  console.log("This is task sass");
  cb();
};

const css = (cb) => {
  console.log("This is task css");
  cb();
};

exports.build = parallel(sass, css);
