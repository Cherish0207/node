const a = 100;
let fn = new Function("a", "b", "console.log(a)");

console.log(fn.toString());
/**
  function anonymous(a,b
  ) {
  console.log(a)
  }
 */

// ReferenceError: a is not defined
fn();
