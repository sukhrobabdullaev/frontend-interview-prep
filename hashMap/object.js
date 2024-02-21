const object = { a: 1, b: 2, c: 3 };

for (const property in object) {
  console.log(`${property}: ${object[property]}`);
}

// Simple array
const arr = ["a", "b", "c"];
console.log(Object.keys(arr)); // ['0', '1', '2']

// Array-like object
const obj = { 0: "a", 1: "b", 2: "c" };
console.log(Object.keys(obj)); // ['0', '1', '2']

// Array-like object with random key ordering
const anObj = { 100: "a", 2: "b", 7: "c" };
console.log(Object.keys(anObj)); // ['2', '7', '100']

const object1 = {
  a: "somestring",
  b: 42,
  c: false,
};

console.log(Object.values(object1));
// Expected output: Array ["somestring", 42, false]
console.log(Object.values("foo")); // ['f', 'o', 'o']
// console.log(Object.values(arr)); // ['f', 'o', 'o']

const object2 = {
  a: "somestring",
  b: 42,
};

for (let i in object2) {
  console.log(i); // a,b
  console.log(object2[i]); // somestring 42
}
for (const [key, value] of Object.entries(object2)) {
  console.log(`${key}: ${value}`);
}

// Expected output:
// "a: somestring"
// "b: 42"

const object3 = {
  prop: "exists",
};
console.log(Object.getOwnPropertyNames(object3));
// [ 'prop' ]

console.log(Object.hasOwn(object3, "prop"));
// Expected output: true

console.log(Object.hasOwn(object3, "toString"));
// Expected output: false

console.log(Object.hasOwn(object3, "undeclaredPropertyValue"));
// Expected output: false
