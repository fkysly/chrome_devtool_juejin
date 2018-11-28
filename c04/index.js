let x = "正确答案";

function foo() {
  let x = "错误答案";
  return setTimeout(function() {
    document.write("当前是" + x);
  }, 1000);
}

foo();
