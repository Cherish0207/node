let vm = require("vm"); // 虚拟机模块可以创建沙箱环境

const a = 100;

// 在这个上下文中执行
vm.runInThisContext("console.log(a)");
// ReferenceError: a is not defined
