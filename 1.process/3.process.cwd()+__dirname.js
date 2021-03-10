// 当前用户的工作目录 current working directory
// 用户在哪执行node命令,就去哪找配置文件 webpack
console.log(process.cwd());
// 当前文件的所在的目录,这个目录是不能手动修改的 是每个模块独有的
console.log(__dirname);
