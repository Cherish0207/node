

const a = 100;
let fn = new Function("console.log(a)");

console.log(fn.toString());
/**
  function anonymous(
  ) {
  console.log(a)
  }
 */

// ReferenceError: a is not defined
fn();
