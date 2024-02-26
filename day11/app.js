// 70 JS inteview questions

console.log(!!null);
console.log(!!undefined);

console.log(Boolean(null));
console.log(Boolean(undefined));

// UNDEFINED
let _thisIsUndefined;
const doNothing = () => {};
const someObj = {
  a: "ay",
  b: "bee",
  c: "si",
};

console.log(_thisIsUndefined); // deafult value that has not assigned to any specifc value
console.log(doNothing()); // a function that has no explicit return value
console.log(someObj["d"]); // a property that doesn't exist in an object

// NULL is a value that represents no value
let noValue = null;
console.log(noValue);
console.log(null == undefined);
console.log(null === undefined);

// && LOGICAL OPERATOR -> finds the first falsy expression, if it doesnt, return the last expression. EXPRESSION ...
console.log(true && "false" && 32 && "");
console.log(false && 1 && []);
console.log(Boolean({}));
console.log(" " && true && 5); // 5

const data = [
  {
    id: 1,
  },
];
// using data is comming here like (post && post.title) // title if both of them true, post in undefined -> undefined
console.log(data && data[0].id);

// OR operator -> finds the first truthy expression in its operands

console.log(true || "false" || 32 || "");
console.log(false || 1 || []);
console.log(Boolean({}));
console.log(" " || true || 5); // 5
console.log(undefined || null || "");

// it is used for function paramaters
function logName(name) {
  var n = name || "Mark";
  console.log(n);
}

logName();

// UNARY + IS the fastest way to convert from str to num, beacuse of performing any operation on value if it is already number        - Number(str)
console.log(+34);
console.log(+undefined);
console.log(+"");
console.log(+null);
console.log(+{});
console.log(+[]);
console.log(+`hey`);
console.log(+`33`);

console.log(Number(34));
console.log(Number(undefined));
console.log(Number(null));
console.log(Number({}));
console.log(Number([]));
console.log(Number(" "));
console.log(Number(`hey`));
console.log(Number(`33`));

// DOM is an interface  API for HTML documents, when a browser first reads(parses) our HTML document it create a big object. IT is used for modifying and interacting the DOM STRUCTURE or spesific elements or nodes.

// Event propagation - capturing phase, target phase, bubbling phase.
// EVENT BUBBLING - goes up window, capture: false by default.
// EVENT CAPTRUING - goes down window, capture: true form the window.
// EVENT Target

// e.preventDefault() -> default behavior of element. form submit, achor link, contextmenu.
// e.stopPropagation() -> stops the propogation of an event or it stops the event from occurring in the bubbling or capturing phase.

const obj = {
  someprops: "sss",
};
console.log(obj.someprop);
// console.log(obj.someprop.x); // throws an error

// Event Target vs. event current target
// type coercion == -> compares by value after corercion, while === compares by value and type without coercion.

console.log(undefined == null);
let x1 = 22,
  y = "22";
console.log(x1 == y); // x1==toNumber(y)
console.log(y == x1); // toNumber(y)==x1

// string, boolean with( number). toNumber()
console.log("1,2" == [1, 2]);
console.log("[object Object]" == {});

// Comparing the two similar objects

// javascript compares objects and primitives differntly. compare by refernce and value respectively.

let a = { a: 1 }; // 0xFAXB
let b = { a: 1 }; // 12xFBA
let c = a; // 0xFAXB A==C :checked.

console.log(a === b); // logs false
console.log(a === c); // true

console.log(!!null); //logs false
console.log(!!undefined); //logs false
console.log(!!""); //logs false
console.log(!!0); //logs false
console.log(!!NaN); //logs false
console.log(!!" "); //logs true
console.log(!!{}); //logs true
console.log(!![]); //logs true
console.log(!!1); //logs true
console.log(!![].length); //logs false

// Evaluate multiple expressions

let x = 5;

x = (x++, (x = addFive(x)), (x *= 2), (x -= 5), (x += 10));

function addFive(num) {
  return num + 5;
}

console.log(x);

// SCOPES - three types; global, funciton , block

// GLOBAL scope...
//global namespace
var g = "global";

function globalFunc() {
  function innerFunc() {
    console.log(g); // can access "g" because "g" is a global variable
  }
  innerFunc();
}

globalFunc();

// FUNCTION scope...
function myFavoriteFunc(s) {
  if (true) {
    var t = "Hello " + s;
  }
  return t;
}
myFavoriteFunc("World");

// console.log(myFavoriteFunc("World")); // var is function scope.

// console.log(s); // Throws a ReferenceError "s" is not defined
// console.log(t); // does not continue here

// BLOCK SCOPE - (let,const)
function testBlock() {
  if (true) {
    // var z = 5;
    let z = 5; // let, const
  }
  return z;
}

// testBlock(); // Throws a ReferenceError "z" is not defined

/* Scope Chain
   Inside inner function perspective

   inner's scope -> outer's scope -> global's scope
  */

// 'use strict' directive
/**
 * - Assigning or Accessing a variable that is not declared. y=123, return y;
 * - var NaN = NaN;
   var undefined = undefined;
   var Infinity = "and beyond";
 * - Duplicate paramaters
   function someFunc(a, b, b, c){

   }
 * The default value of 'this' will be undefined.
 * 
 */

// ("use strict");

// function showMeThis() {
//   return this;
// }

// console.log(showMeThis());

(function () {
  console.log(this);
})(); //logs the "window" object

// apply
const details = {
  message: "world",
};

function getMessage(word) {
  return `${word} ${this.message}`;
}

console.log(getMessage.apply(details, ["Hello"]));

// call
const person = {
  name: "Marko Polo",
};

function greeting(greetingMessage) {
  return `${greetingMessage} ${this.name}`;
}

const boundFunction = greeting.bind(person);
console.log(boundFunction("Patret"));

//   result: 0,
// };

// const obj2 = {
//   result: 0,
// };

// function reduceAdd() {
//   let result = 0;
//   for (let i = 0, len = arguments.length; i < len; i++) {
//     result += arguments[i];
//   }
//   this.result = result;
// }

// console.log(reduceAdd.apply(obj1, [1, 2, 3, 4, 5]));
// reduceAdd.call(obj2, 1, 2, 3, 4, 5); // returns 15

Array.prototype.myMap = function (callback) {
  const newArray = []; // Create a new array to store the results
  for (let i = 0; i < this.length; i++) {
    // Loop through each element of the array
    newArray.push(callback(this[i], i, this)); // Call the callback function for each element
    // and push the result to the new array
  }
  return newArray; // Return the new array
};
const nums = [1, 2, 3, 4].myMap((el, idx, arr) => {
  console.log(el, idx, arr);
});
console.log(nums);

alert({});
