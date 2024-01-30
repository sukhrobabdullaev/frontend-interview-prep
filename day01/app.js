// ---------CREATE OBJECTS----------------- //

// way 1 - object literal
var object = {
  name: "Sudheer",
  age: 34,
  activities: {
    workout: "running",
  },
};
// way 2 - object constructor
var object2 = Object(); // empty obj
object2.name = "Sukhrob";
// way 3 - create method
let obj3 = Object.create(null); // empty obj with null prototype
// way 4 - function constructor
function Obj4(name) {
  (this.name = name), (this.age = 21);
}
const obj4 = new Obj4("sukhrob");
// way 5 - ES6 class feature
class Person {
  constructor(name) {
    this.name = name;
  }
}

const person = new Person("sukhrob"); // object instance
// way 6 - Singleton pattern
var obj5 = new (function () {
  this.name = "Sudheer";
})(); // not object instance

// ---------WHAT IS PROTOYPE CHAIN----------------- //
console.log(Object.getPrototypeOf(object));
// ---------DIFFERENCES AMONG CALL, APPLY AND BIND---------------- //

// call invokes a function with a given this value and arguments
let employee1 = { firstName: "Sukhrob", lastName: "Abdullaev" };
let employee2 = { firstName: "Temur", lastName: "Abdullaev" };

function invite(greeting1, greeting2) {
  console.log(greeting1, this.firstName, this.lastName, greeting2);
}
const inviteEmployee1 = invite.bind(employee1);
inviteEmployee1("Hello", "what up");

invite.apply(employee2, ["Hello", "How are you"]);

// 4. JSON and its common operations
let text = '{"name":"sukhrob"}';
console.log(JSON.parse(text));
// console.log(JSON.stringify({ name: "salom" }));

// 5. array slice method - return a new array without changing the original
let arrayIntegers = [1, 2, 3, 4, 5];
// let arrayIntegers1 = arrayIntegers.slice(0, 2); // returns [1,2]
// let arrayIntegers2 = arrayIntegers.slice(2, 3); // returns [3]
// let arrayIntegers3 = arrayIntegers.slice(4); //returns [5]

// 6. array splice method - adds/removes items to/from an array - then returns the removed item

let arrayIntegersOriginal1 = [1, 2, 3, 4, 5];
let arrayIntegersOriginal2 = [1, 2, 3, 4, 5];
let arrayIntegersOriginal3 = [1, 2, 3, 4, 5];

let arrayIntegers1 = arrayIntegersOriginal1.splice(0, 2); // returns [1, 2]; original array: [3, 4, 5]
let arrayIntegers2 = arrayIntegersOriginal2.splice(3); // returns [4, 5]; original array: [1, 2, 3]
let arrayIntegers3 = arrayIntegersOriginal3.splice(3, 1, "a", "b", "c"); //returns [4]; original array: [1, 2, 3, "a", "b", "c", 5]

// 7. What is the difference between slice and splice

/*
  slice - doesn't modify the original array(immutable)
          returns the subset of original array
          used to pick the elements from array
  splice - modifies the original arra(mutable)
           returns the deleted elements as array
           used to insert/delete eLements to/from array
*/

// 8. How do you compare Object and Map
// 9. What is the difference between == and === operations
/*
    == is type-converting equality operation
    // === is strict equality operation
    
*/

console.log(function () {} == function () {});
// 10. What are lambda or arrow functions
