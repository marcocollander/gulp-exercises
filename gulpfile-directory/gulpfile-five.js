// Zalecany sposób, zadanie exportujemy aby go zarejestrowć w systemie zadań gulpa

function test(cb) {
  console.log("test again");
  cb();
}

exports.test = test;
