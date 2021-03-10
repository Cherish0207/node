const fs = require("fs");
const path = require("path");

// 1.同步判断文件是否存在 (异步方法已经被废弃，因为返回的err不符合规范)
const exists = fs.existsSync(path.resolve(__dirname, "..", "name.txt"));
console.log(exists);
// 2.同步的读取文件
const r = fs.readFileSync(path.resolve(__dirname, "..", "gitlog.txt"), "utf8");
console.log(r);
