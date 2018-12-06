let vm = new Vue({
  data: {
    value: 'running...',
    timer: null
  },
  created: function() {
    this.timer = setInterval(() => {
      console.log(this.value);
    }, 100);
  },
  destroyed: function() {
    // clearInterval(vm.$data.timer);
    // console.log('stopped');
  }
});

let stopBtn = document.querySelector('#stop');
stopBtn.addEventListener('click', () => {
  // vm.$destroy();
  vm = null;
});
