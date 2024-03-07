let user = {
  name: "sukhrob",
  age: 21,
};

// let clone = user;
// console.log(user.name);
// clone.name='sasss'
// console.log(user.name);

let clone = {};

for (let key in user) {
  clone[key] = user[key];
}
user.name = "sssss";
console.log(clone);
console.log(user);

let deepClone = Object.assign({}, user);
deepClone.age = 30;
console.log(user);

let deepClone2 = { ...user };
user.name = "ssssssssssssss";
console.log(deepClone2);

////////////////////////////////////////////////////////

let user2 = {
  name: "John",
  age: 30,
  sayHi() {
    console.log(this.name);
  },
};

// user2.sayHi = function () {
//   console.log("Hello!");
// };

// user2.sayHi(); // hello
user2.sayHi(); // hello

function sayHi2() {
  console.log(this);
}

sayHi2();

// what's result of this in arrow functions
const sayHi3 = () => {
  console.log(this);
};

sayHi3(); // window

let idSy = Symbol("id");
let user3 = {
  name: "John",
  age: 30,
  sayHi4: () => {
    console.log(this);
  },
  idSy: 33,
};

user3.sayHi4(); // window 66
console.log(user3["idSy"]);

// const h1 = document.querySelector("h1");
// h1.addEventListener("click", () => {
//   console.log(this);
// });

function foo() {
  console.log(this);
}

foo();

function User(name) {
  this.name = name;
  this.isAdmin = false;
  if (!new.target) {
    return new User(name);
  }
}

let user4 = User("Jack");
console.log(user4);
console.log(user4.address);

num = 10; // num = 1
let num;
console.log(num);
