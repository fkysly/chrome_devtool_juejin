window.arr = [];

function createVar(index) {
  window.arr.push(index);
}

for (var i = 0; i < 1000000; i++) {
  setTimeout(() => {
    createVar(i);
  }, 1);
}
