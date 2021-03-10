function a(obj) {
  let str = "";
  with (obj) {
    str += `<!DOCTYPE html>
              <html lang="en">
                <head>
                  <meta charset="UTF-8" />
                  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                  <title>Document</title>
                </head>
                <body>`;
    arr.forEach((item) => {
      str += `<li>${item}</li>`;
    });
    str += `</body>
      </html>`;
  }
  return str;
}
let res = a({ arr: [1, 2, 3] });
console.log(res);
// 思路:
// 1.需要把字符串中的 {%%} 替换掉并且拼出一个结果的字符串
// 2.new Funciton的方式 把字符串转换成js
// 3.with 解决作用域问题
