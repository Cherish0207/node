// 1.变量替换 -- 正则
// 2.去某个空间下取值 with
// 3.让字符串转成js执行 new Function
const path = require("path");
const fs = require("fs");
const renderFile = (filePath, obj, cb) => {
  fs.readFile(filePath, "utf8", (err, html) => {
    if (err) return cb(err, html);
    html = html.replace(/\{\{([^}]+)\}\}/g, (...args) => {
      return "${" + args[1].trim() + "}";
    });
    let head = `let str = '';\r\n with(obj){\r\n`;
    head += "str+=`";
    html = html.replace(/\{\%([^%]+)\%\}/g, (...args) => {
      return "`\r\n " + args[1] + " \r\n str+=`\r\n";
    });
    let tail = "`} return str";
    let fn = new Function('obj',head + html + tail);
    // console.log(fn.toString());
    cb(null, fn(obj));
  });
};
renderFile(
  path.resolve(__dirname, "myTemplate.html"),
  { name: "cherish", age: 18, arr: [1, 2, 3] },
  (err, data) => {
    console.log(err, data);
  }
);
