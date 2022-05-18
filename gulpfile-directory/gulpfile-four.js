// Zadanie odpalamy gulp test w wierszu poleceń
// Nic nie eksportujemy
// Sposób przestarzały już nie zalecany

const gulp = require('gulp');

gulp.task('test', function(cb){
  console.log('test');
  cb();
})