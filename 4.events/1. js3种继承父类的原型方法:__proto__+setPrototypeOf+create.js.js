const EventEmitter = require("events");
function Person(name) {
  this.name = name;
}
// 继承父类的原型方法
// 1.最早
// Person.prototype.__proto__ = EventEmitter.prototype;
// 2.简便写法 es6
// Object.setPrototypeOf(Girl.prototype, EventEmitter.prototype);

let p = new Person();
console.log(p.on);

// 3.es5
/* create原理
function create (parentPrototype){
  function Fn(){

  }
  Fn.prototype = parentPrototype
  return new Fn()
}
*/
Person.prototype = Object.create(EventEmitter.prototype);
Person.prototype = create(EventEmitter.prototype);
