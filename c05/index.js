class Foo {
  constructor() {
    this.value = 'Hello';
    this.timer = null;
    this.leak();
  }

  leak() {
    this.timer = setInterval(() => {
      console.log(this.value);
    }, 100);
  }

  destory() {
    if (this.timer !== null) {
      clearInterval(this.timer);
    }
  }
}

let foo = new Foo();

// const stopBtn = document.querySelector('#stop');
// stopBtn.addEventListener('click', e => {
//   console.log('destory');
//   foo.destory();
//   foo = null;
// });
