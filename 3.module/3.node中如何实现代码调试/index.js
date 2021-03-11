const path = require("path");
const fs = require("fs");
const vm = require("vm");

function Module(id) {
  this.id = id;
  this.exports = {};
}
/**
 * 把内容包装成函数Str
 * @param {*} script
 * @returns
 */
Module.warp = function (script) {
  let arr = [
    `(function(exports,require,module,__filename,__dirname){`,
    script,
    "})",
  ];
  return arr.join("");
};
/**
 * 策略模式
 */
Module._extensition = {
  ".js"(module) {
    let content = fs.readFileSync(module.id, "utf-8");
    // 把内容包装成一个函数，传入函数参数
    let fnStr = Module.warp(content);
    let fn = vm.runInThisContext(fnStr);
    /**
    console.log(fn.toString());
    function(exports,require,module,__filename,__dirname){
      let a = 1;
      module.exports = { a: 1 };
    }
     */
    let exports = module.exports;
    let require = myRequire;
    let __filename = module.id;
    let __dirname = path.dirname(module.id); // 当前文件路径的目录
    // 这里的this就是exports对像
    fn.call(exports, exports, require, module, __filename, __dirname);
    // 调用fn的过程中，用户会给 module.exports 赋值
    // 于是就能拿到 module.exports 的值了
    // 模块里的this就是module.exports
    // 模块中三种写法等价
    // 1.this.a = 1
    // 2.exports.a = 1
    // 3.module.exports.a = 1
  },
  ".json"(module) {
    let content = fs.readFileSync(module.id, "utf-8"); // 读取出来的是字符串
    module.exports = JSON.parse(content);
  },
};
/**
 * 将路径转化成绝对路径
 * @param {*} filepath 文件路径
 * @returns 绝对路径
 */
Module._resolveFilename = function (filepath) {
  let filePath = path.resolve(__dirname, filepath);
  // 存在: 直接返回绝对路径
  if (fs.existsSync(filePath)) return filePath;
  // 不存在: 尝试添加后缀
  let keys = Object.keys(Module._extensition);
  for (let i = 0; i < keys.length; i++) {
    let currentPath = filePath + keys[i];
    if (fs.existsSync(currentPath)) return currentPath;
  }
  throw new Error("模块不存在");
};
Module.prototype.load = function (filename) {
  let extname = path.extname(filename); // 获取文件的后缀/扩展名
  Module._extensition[extname](this); // 根据对应的后缀名进行加载
};
Module._load = function (filepath) {
  let filename = Module._resolveFilename(filepath);
  // 保证每个模块的唯一性,需要通过唯一路径进行查找
  let module = new Module(filename); // 进行模块的创建（模块本身有 exports 属性） id, exports 对应的就是当前模块的结果
  module.load(filename); // 创建后加载
  return module.exports;
};

function myRequire(filepath) {
  return Module._load(filepath);
}

// let r = myRequire("./a.json");
let r = myRequire("./a.js");
console.log("r:", r);
