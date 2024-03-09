let billion = 1_000_9; // 1 billion, literally: 1 and 9 zeroes
console.log(billion);

let users = [
  { id: 1, name: "John" },
  { id: 2, name: "Pete" },
  { id: 3, name: "Mary" },
  { id: 4, name: "John" },
];

// Find the index of the first John
let user = users.find((item) => item.id == 2);
console.log(user);

let user2 = users.findIndex((user) => user.name == "John");
console.log(user2);

// Find the index of the last John
console.log(users.findLastIndex((user) => user.name == "John")); // 3
// returns array of the first two users
let someUsers = users.filter((item) => item.id < 3);
console.log(someUsers);

let obj = {};
// console.log(Object.is(obj));

let map = new Map();
map.set("name", "sukhrob");
map.set({}, "2");
map.set("1", "str1"); // a string key
map.set(1, "num1"); // a numeric key
map.set(true, "bool1"); // a boolean key

// console.log(map.get('na')); // undefined
// console.log(map.get('name')); // 'sukhrob'

// map.clear();
console.log(map.size);
console.log(map.get("1"));
console.log(map.get(1));
console.log(map.get(true));

let john = { name: "John" };

// for every user, let's store their visits count
let visitsCountMap = new Map();

// john is the key for the map
visitsCountMap.set(john, 123);

console.log(visitsCountMap.get(john)); //

let recipeMap = new Map([
  ["cucumber", 500],
  ["tomatoes", 350],
  ["onion", 50],
]);

recipeMap.set("apple", 300);

// iterate over keys (vegetables)
for (let vegetable of recipeMap.keys()) {
  console.log(vegetable); // cucumber, tomatoes, onion
}

// iterate over values (amounts)
for (let amount of recipeMap.values()) {
  console.log(amount); // 500, 350, 50
}

// iterate over [key, value] entries
for (let entry of recipeMap) {
  // the same as of recipeMap.entries()
  console.log(entry); // cucumber,500 (and so on)
}

let set = new Set(["oranges", "apples", "bananas"]);

for (let value of set) console.log(value);

console.log(set.keys());

for (let key of set.values()) {
  console.log(key);
}

function unique(arr) {
  let set = new Set(arr);

  return Array.from(set);
  /* your code */
}

let values = [
  "Hare",
  "Krishna",
  "Hare",
  "Krishna",
  "Krishna",
  "Krishna",
  "Hare",
  "Hare",
  ":-O",
];

console.log(unique(values));

function sumAll(...args) {
  // args is the name for the array
  let sum = 0;

  for (let arg of args) sum += arg;

  return sum;
}

console.log(sumAll(1)); // 1
console.log(sumAll(1, 2)); // 3
console.log(sumAll(1, 2, 3)); // 6
