// if (!Array.prototype.map) {
Array.prototype.map = function (callback, thisArg) {
  var mappedArray = [];
  for (var i = 0; i < this.length; i++) {
    mappedArray.push(callback.call(thisArg, this[i], i, this));
  }
  return mappedArray;
};
// }

[1, 2, 3, 4].map((el, idx, ar) => {
  console.log(el, idx, ar);
});

console.log(a); // undefined
// console.log(x); // cannot access 'x' before initilization
// console.log(y);

let x = 10;
var a = 20;
const y = 30;

let obj1 = { prop: "this is a prop" };
let obj2 = obj1;
console.log(obj2);
obj2.prop = "new prop";

console.log(obj1);

let [a1, b1, ...c] = [1, 2, 3, 4];
console.log(a1, b1);
console.log(c);
