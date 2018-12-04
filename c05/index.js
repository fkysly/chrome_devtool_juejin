var foo = {
  init: function() {
    this.value = "hello"
  },
  leak: function() {
    setTimeout(function() {
      console.log(this.value)
    })
  }
}

for(var i = 0; i < 100000; i++) {
  foo.init()
  foo.leak()
}