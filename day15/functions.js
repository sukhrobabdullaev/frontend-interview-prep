// functions...

// Q1. what are First Class Functions - pass function as an argument.

function square(num) {
  return num * num;
}

function displaySquare(fn) {
  console.log(fn(2));
}

displaySquare(square);

// Q2. IIFE
// Q3. Closures
// Q4. Function scope
// Q5. Callback function sync..
// Q6. Arrow funcs -> no need to take arguments keyword.
// Q7. Arrow funcs, normal funcs
// Q8. Closure Scope chain
// Q9. Block Scope and setTimeOut

let user = {
  username: "sukhrob",
  rc1: () => {
    console.log("My username is ", this.username);
  },
  rc2() {
    console.log("My username is ", this.username);
  },
};

user.rc1();
user.rc2();

function makeFun() {
  var name = "Mozilla";
  function displayName() {
    console.log(name);
  }

  return displayName;
}

const myFunc = makeFun();
myFunc();

function a() {
  for (var i = 0; i < 3; i++) {
    function inner(i) {
      setTimeout(() => {
        console.log(i);
      }, i * 100);
    }
  }

  inner(i);
}

// 0 1 2
a();

function add(a) {
  return function (b) {
    if (b) return add(a + b);
    return a;
  };
}

console.log(add(5)(3)(4)());

function addArgs(...args) {
  return args.reduce((sum, curr) => sum + curr);
}

console.log(addArgs(2, 3, 4, 4, 5, 6));
