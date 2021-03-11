const EventEmitter = require("events");
const utils = require("util"); // util.promisify / util.inherits
function Girl(name) {
  this.name = name;
}
utils.inherits(Girl, EventEmitter);
let girl = new Girl();
girl.on('lose',cry)
girl.on('lose',eat)
function cry(name){
  console.log(name+'crying');
}
function eat(name) {
  console.log(name + "eating");
}
girl.emit('lose','lucas')
