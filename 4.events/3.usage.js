const EventEmitter = require("./EventEmitter");
const utils = require("util"); // util.promisify / util.inherits
function Girl(name) {
  this.name = name;
}
utils.inherits(Girl, EventEmitter);

let girl = new Girl();
function cry(name) {
  console.log(name + " 哭");
}
function eat(name) {
  console.log(name + " 吃");
}
// newListener--事件的监听器，固定写法
// 1.放在绑定事件之前绑定
// 2.第一次触发时，_events对象还是空的
girl.on("newListener", (type) => {
  console.log("newListener", type);
  if (type === "女生失恋") {
    process.nextTick(() => {
      girl.emit(type, "viral");
    });
  }
});
girl.on("女生失恋", cry);
girl.on("女生失恋", eat);
// girl.once("女生失恋", cry);
// girl.once("女生失恋", eat);
