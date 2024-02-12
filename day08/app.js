const obj1 = {
  id: 1,
  isWorked: false,
};
const obj2 = {
  id: 1,
  isWorked: false,
};

console.log(obj1 === obj2); //differnt memories in memory, return false

// function userDetails(username) {
//   if (username) {
//     console.log(salary); // undefined due to hoisting
//     console.log(age); // ReferenceError: Cannot access 'age' before initialization
//     let age = 30;
//     var salary = 10000;
//   }
//   console.log(salary); //10000 (accessible due to function scope)
//   console.log(age); //error: age is not defined(due to block scope)
// }
// userDetails("John");

// function hoistingLetExample() {
//   console.log(b); // Throws ReferenceError: Cannot access 'b' before initialization
//   let b = 10;
//   console.log(b);
// }

// hoistingLetExample();

(function () {
  var message = "IIFE";
  console.log(message);
})();
console.log(message); //Error: message is not defined
