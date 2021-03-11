let a = 1;
console.log(module.exports === this); // true
this.a = a;
setInterval(() => {
  module.exports = a++;
}, 1000);
